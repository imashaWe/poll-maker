import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserData } from 'src/app/models/user-data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  userData: UserData

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userData = this.authService.getUser();
  }

  async logout() {
    await this.authService.logout();
    location.reload();
  }

}
