import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userLogin: string;
  userPassword: string;

  constructor(private _router: Router) {
    this.userLogin = 'Jon';
    this.userPassword = 'Doe';
  }

  authentication(data): boolean {
    if (data.user.login === this.userLogin && data.user.password === this.userPassword) {
      localStorage.setItem('login', 'Jon');
      localStorage.setItem('IsUsereAuthorised', 'Yes');
      this._router.navigate(['/home']);
    } else {
      return false;
    }
  }
}

