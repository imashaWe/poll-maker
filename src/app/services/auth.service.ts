import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { CookieService } from 'ngx-cookie-service';
import { UserData } from 'src/app/models/user-data';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private cookie: CookieService) { }

  getUser(): UserData {
    const user = this.cookie.get('user');
    if (!user) return null;
    return JSON.parse(user);
  }

  async loginViaGoogle(): Promise<Boolean> {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const res = await this.fireAuth.signInWithPopup(provider);
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

  async loginViaFacebook(): Promise<Boolean> {
    const provider = new firebase.auth.FacebookAuthProvider();
    try {
      const res = await this.fireAuth.signInWithPopup(provider);
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
    this.cookie.delete('user');
    await this.fireAuth.signOut();
  }

  setLoginData(uid: string, name: string, photoUrl: string): void {
    this.cookie.delete('user');
    this.cookie.set('user', JSON.stringify({ 'uid': uid, 'name': name, 'photoUrl': photoUrl }), {expires:356 * 100,path:'/'});
  }

}
