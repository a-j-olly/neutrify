import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';
import { KeychainService } from 'src/app/services/keychain.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  passwordType = 'password';
  public invalidDetails: boolean = false;
  public loading: boolean = false;
  public showAlert: boolean = true;
  private platformSource: string;
  private keychainNotFound = false;

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private storage: Storage,
    private ga: GoogleAnalyticsService,
    public platform: Platform,
    private keychainService: KeychainService,
    private toastController: ToastController
  ) {
    this.platform.ready().then((readySource: string) => this.platformSource = readySource);
  }

  ngOnInit() {
    this.authService.setState('signIn');
    this.signInForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      savePassword: [false]
    });
  }

  async ionViewDidEnter() {    
    this.storage.get('ion_did_quick_start').then(result => {
      this.showAlert = !result;
    });
  }

  get f() { return this.signInForm.controls; }

  togglePasswordType() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }

  async signIn() {
    const email = this.signInForm.value.email, password = this.signInForm.value.password;
    this.loading = true;
    
    if (this.signInForm.valid) {
      this.signInForm.disable();
      const res = await this.authService.signIn(email, password);

      if (res === 'true') {

        if (this.keychainNotFound || (this.platform.is('ios') && this.platformSource !== 'dom') && this.f.savePassword.value) {
          try {
            this.keychainService.setKeychainPassword(email, password);
          } catch (err) {
            console.log('Did/could not add the password to the keychain. Service returned this error: ', err);

            if (err.code === 'errSecDuplicateItem') {
              try {
                await this.keychainService.replaceKeychainPassword(email, password);
              } catch (err) {
                console.log('Did/could not replace the password on the keychain. Service returned this error: ', err);
              }
            } else {
              this.presentToast('Did/could not add the password to the keychain.', 'danger');
            }
          }
        }
        
        if (this.showAlert) {
          await this.presentAlertConfirm();
        } else {
          await this.router.navigateByUrl('/app', { replaceUrl: true });
        }

        this.invalidDetails = false;
        this.signInForm.reset();
        this.signInForm.enable();
        this.loading = false;
      } else {
        this.invalidDetails = true;
        this.signInForm.controls.password.reset();
        this.signInForm.enable();
        this.loading = false;
      }
    }
  }

  async passwordOnBlur() {
    this.f.password.reset();
    this.getPassword();
  }

  async getPassword() {
    if (this.f.email.valid && !this.f.password.valid) {
      if (this.platform.is('ios') && this.platformSource !== 'dom') {
        await this.getKeychainPassword(this.f.email.value);
      }
    }
  }

  async getKeychainPassword(email) {
    try {
      const password = await this.keychainService.getKeychainPassword(email);

      if (password) {
        this.f.password.setValue(password);
        await this.presentToast('Successfully got your password via Keychain', 'success');
      }
    } catch (err) {
      if (err.code === 'errSecItemNotFound') {
        this.keychainNotFound = true;
      } else {
        console.log('Could not get your password from the keychain. Service returned this error: ', err);
        await this.presentToast('Could not get your password from the keychain', 'danger');
      }
    }
  }

  navToSignUp() {
    this.signInForm.reset();
    this.router.navigateByUrl('/auth/create-account');
  }

  navToResetPassword() {
    this.signInForm.reset();
    this.router.navigateByUrl('/auth/reset-password');
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      message: 'Would you like to set some starting filters? If not you, will go straight to the app.',
      buttons: [
        {
          text: 'No thanks',
          role: 'cancel',
          cssClass: 'secondary',
          handler: async () => {
            this.storage.set('ion_did_quick_start', true);
            await this.router.navigateByUrl('/app', { replaceUrl: true });
          }
        }, {
          text: 'Quick start',
          handler: async () => {
            this.ga.eventEmitter('quick_start', 'engagement', 'Quick start');
            await this.router.navigateByUrl('/app/quick-start', { replaceUrl: true });
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      cssClass: 'ion-text-center',
      position: 'middle'
    });
    await toast.present();
  }
}
