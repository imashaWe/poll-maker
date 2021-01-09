import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { CookieService } from 'ngx-cookie-service';
import { UserData } from 'src/app/models/user-data';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _fireAuth: AngularFireAuth, private cookie: CookieService) { }

  getUser(): UserData {
    return JSON.parse(this.cookie.get('user'));
  }

  async loginViaGoogle(): Promise<Boolean> {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const res = await this._fireAuth.signInWithPopup(provider);
      if (res.user != null) {
        const user = res.user;
        this.setLoginData(user.uid, user.displayName, user.photoURL);
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async logout(): Promise<void> {
    await this._fireAuth.signOut();
  }

  setLoginData(uid: string, name: string, photoUrl: string): void {
    this.cookie.set('user', JSON.stringify({ 'uid': uid, 'name': name, 'photoUrl': photoUrl }),356 * 100);
  }

}
