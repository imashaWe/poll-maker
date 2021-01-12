import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private _fireauth: AngularFireAuth, private router: Router,) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._fireauth.authState.pipe(
      take(1),
      switchMap(async (authState) => {
        if (authState) {
          return true
        } else {
          this.router.navigate(['/login'],{queryParams:{'redirectTo':state.url}});
          return false
        }
      }),
    )
  }

}