import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import rout-guard
import { LoginGuard } from './guards/login.guard';
import { PollGuard } from 'src/app/guards/poll.guard';

// import components
import { HomeComponent } from './pages/home/home.component';
import { WelcomeComponent } from './pages/welcome/welcome.component'
import { LoginComponent } from './pages/auth/login/login.component';
import { VoteComponent } from './pages/poll/vote/vote.component'
import { CreateComponent } from './pages/poll/create/create.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent, children: [{ path: '', component: WelcomeComponent }] },
  {
    path: 'poll',
    component: HomeComponent,
    canActivate: [LoginGuard],
    children: [
      { path: '', redirectTo: 'create', pathMatch: 'full' },
      { path: 'create', component: CreateComponent },
      { path: 'vote/:id', component: VoteComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomeComponent, children: [{ path: '', component: PageNotFoundComponent }]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
