import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _fireAuth: AngularFireAuth) { }

  async loginViaGoogle(): Promise<Boolean> {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const res = await this._fireAuth.signInWithPopup(provider);
      return res.user != null
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async logout(): Promise<void> {
    await this._fireAuth.signOut();
  }


}
