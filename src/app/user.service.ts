import { Injectable } from '@angular/core';
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _router: Router) { }

  setLogin(data): void {
    localStorage.setItem('loginUser', data);
    console.log(localStorage.getItem('loginUser'))
  }

  setPassword(data): void {
    localStorage.setItem('passwordUser', data);
    console.log(localStorage.getItem('passwordUser'))
   }

   userAuthentication() {
     //there is no logic to verify login and password - was not between tasks
     this._router.navigate(["/home"])
   }
}
