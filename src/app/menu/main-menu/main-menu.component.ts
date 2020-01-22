import { Router } from '@angular/router';
import { AuthModalComponent } from './../../auth-modal/auth-modal.component';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {

  constructor(private authService: AuthService, public modalController: ModalController, private router: Router) { }

  ngOnInit() {}

  async signOut() {
    const res = await this.authService.signOut();

    if (res) {
      this.router.navigate(['/home']);
    } else {
      alert('Could not sign you out. Please try again');
    }
  }
}
