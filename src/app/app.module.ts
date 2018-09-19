import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component'

import { UserService } from './user.service';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'one', component: OneComponent},
  { path: 'two', component: TwoComponent},
  { path: '', component: LoginComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    OneComponent,
    TwoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
