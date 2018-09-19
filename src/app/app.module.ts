import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

import { UserService } from './user.service';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
