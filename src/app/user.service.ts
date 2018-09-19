import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  setLogin(data): void {
    console.log('login: ',data)  }

  setPassword(data): void {
    console.log('password:', data)  }


}
