import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PollService } from 'src/app/services/poll.service';
import { ActivatedRoute,Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class PollGuard implements CanActivate {
  constructor(private pollService: PollService, private activedRouter: ActivatedRoute,private router:Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = this.activedRouter.snapshot.paramMap.get('id');
    console.log('id');
    console.log(id);
    return this.pollService.checkPoll(id).then(res => {
      switch (res) {
        case 1:
          return true;
        default:
          this.router.navigate(['/page-404']);
          return false
      }
    });
   
  }

}
