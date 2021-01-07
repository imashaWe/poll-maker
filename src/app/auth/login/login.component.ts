import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  facebook = faFacebook;
  google = faGoogle;
  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {


  }

  login(): void {
    //TODO
  }

  async loginViaGoogle() {
    const res = await this._authService.loginViaGoogle();
    if (res == true) {
      this._router.navigate(['/']);
    }
  }

  async loginViaFacebook() {
    //TODO
  }


}
