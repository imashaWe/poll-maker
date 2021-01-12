import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  facebook = faFacebook;
  google = faGoogle;
  private redirectUrl;
  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params=>{
      this.redirectUrl = params.redirectTo;
    });
  }

  ngOnInit(): void {

  }

  login(): void {
    //TODO
  }

  async loginViaGoogle() {
    const res = await this.authService.loginViaGoogle();
    if (res == true) {
      this.router.navigate([this.redirectUrl??'/']);
    }
  }

  async loginViaFacebook() {
    const res = await this.authService.loginViaFacebook();
    if (res == true) {
      this.router.navigate([this.redirectUrl??'/']);
    }
  }


}
