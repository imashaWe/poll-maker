import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import rout-guard
import { LoginGuard } from './guards/login.guard';
import {PollGuard} from 'src/app/guards/poll.guard';

// import components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { VoteComponent } from './poll/vote/vote.component'
import { CreateComponent } from './poll/create/create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'poll/create', pathMatch: 'full' },
  {
    path: 'poll',
    component: HomeComponent,
    canActivate:[LoginGuard],
    children: [
      { path: '', redirectTo: 'create', pathMatch: 'full' },
      { path: 'create', component: CreateComponent },
      { path: 'vote/:id', component: VoteComponent},
      { path: '**', component: PageNotFoundComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
