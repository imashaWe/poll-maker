import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './pages/poll/create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';

import {ScrollingModule}from '@angular/cdk/scrolling';

// import angular flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';
// meterial theme imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

import { LoginComponent } from './pages/auth/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CookieService } from 'ngx-cookie-service';
import { VoteComponent } from './pages/poll/vote/vote.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HomeComponent,
    LoginComponent,
    VoteComponent,
    PageNotFoundComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule, 
    MatListModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    ScrollingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
