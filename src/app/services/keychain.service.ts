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

  public async setKeychainPassword(email: string, password: string): Promise<void> {
    return this.keychain.set(`neutrify-${email}`, password, true);
  }

  public async removeKeychainPassword(email: string): Promise<void> {
    return this.keychain.remove(`neutrify-${email}`);
  }

  public async replaceKeychainPassword(email: string, password: string): Promise<void> {
    await this.removeKeychainPassword(email);
    return await this.setKeychainPassword(email, password);
  }
}
