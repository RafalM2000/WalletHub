import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  setLogin(data): void {
    localStorage.setItem('loginUser', data);
    console.log(localStorage.getItem('loginUser'))
  }

  setPassword(data): void {
    localStorage.setItem('passwordUser', data);
    console.log(localStorage.getItem('passwordUser'))
   }


}
