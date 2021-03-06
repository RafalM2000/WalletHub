import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { OneComponent } from './one/one.component';
import { HomeComponent } from './home/home.component';
import { OneDetailsComponent } from './one-details/one-details.component';

import { UserService } from './user.service';
import { AuthGuard } from './auth.guards';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'one', component: OneComponent, canActivate: [AuthGuard]},
  { path: 'two', loadChildren: './moduleTwo/two.module', canActivate: [AuthGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    OneComponent,
    HomeComponent,
    OneDetailsComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ UserService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
