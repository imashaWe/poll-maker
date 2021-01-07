import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import rout-guard
import {LoginGuard} from './guards/login.guard';

// import componets
import {CreateComponent} from './poll/create/create.component';
import {LoginComponent} from './auth/login/login.component';


const routes: Routes = [
  {path:'',component:CreateComponent,canActivate:[LoginGuard]},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
