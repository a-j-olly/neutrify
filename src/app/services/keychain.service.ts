import { Injectable } from '@angular/core';
import { Keychain } from '@ionic-native/keychain/ngx';

@Injectable({
  providedIn: 'root'
})
export class KeychainService {

  constructor(private keychain: Keychain) { }

  public async getKeychainPassword(email: string): Promise<string> {
    return (await this.keychain.get(`neutrify-${email}`, 'Getting your password from Keychain...')).value;
  }

  // .catch(err => {
  //   console.log('get keychain err: ', err);
  //   if (err.code === 'errSecItemNotFound') {
  //     // ask if they want to set up the key
  //   } else {
  //     // throw generic error alert
  //   }
  // });

  public async setKeychainPassword(email: string, password: string): Promise<void> {
    return this.keychain.set(`neutrify-${email}`, password, true);
  }

  // const email = this.f.email.value, password = this.f.password.value;
  // this.keychain.set(`neutrify-${email}`, password, true).then(res => {
  //   // success
  // }).catch(err => {
  //   console.log('set keychain err: ', err);
  //   if (err.code === 'errSecDuplicateItem') {
  //     // remove existing keychain and then set it up again
    
  // } else {
  //   // ask if they want to set up the key

  //   }
  // })

  public async removeKeychainPassword(email: string): Promise<void> {
    return this.keychain.remove(`neutrify-${email}`);
  }

  public async replaceKeychainPassword(email: string, password: string): Promise<void> {
    await this.removeKeychainPassword(email);
    return await this.setKeychainPassword(email, password);
  }
}
