import { Injectable } from '@angular/core';
import { Keychain } from '@ionic-native/keychain/ngx';

@Injectable({
  providedIn: 'root'
})
export class KeychainService {

  constructor(private keychain: Keychain) { }

  public async getKeychainPassword(email: string): Promise<string> {
    return await this.keychain.get(`neutrify-${email.trim().toLowerCase()}`, 'Getting your password from Keychain...')
  }

  public async setKeychainPassword(email: string, password: string): Promise<void> {
    return this.keychain.set(`neutrify-${email.trim().toLowerCase()}`, password, true);
  }

  public async removeKeychainPassword(email: string): Promise<void> {
    return this.keychain.remove(`neutrify-${email.trim().toLowerCase()}`);
  }

  public async replaceKeychainPassword(email: string, password: string): Promise<void> {
    await this.removeKeychainPassword(email);
    return await this.setKeychainPassword(email, password);
  }
}
