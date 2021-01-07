import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private _fireAuth: AngularFireAuth,private _router:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
     return  this.checkLogin();
  }

  async checkLogin():Promise<boolean> {
    const user = await this._fireAuth.currentUser;
    if (user == null){
      this._router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
