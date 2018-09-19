import { Injectable } from '@angular/core';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  userLogin: string = 'Jon';
  userPassword: string= "Doe";

  constructor(private _router: Router) { }

  authentication(data) { 
     console.log(data.user.login)
    if (data.user.login === this.userLogin && data.user.password === this.userPassword) {
      localStorage.setItem('login', 'Jon')
      localStorage.setItem('IsUsereAuthorised', 'Yes');
      this._router.navigate(["/home"]);
    }
  }

  checkAuthentication() {
    if (!localStorage.getItem || localStorage.getItem('IsUsereAuthorised') != "Yes") {
      this._router.navigate(["/login"]);
    }
  }
}

