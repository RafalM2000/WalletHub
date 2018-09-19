import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

import { UserService } from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  login: FormControl = new FormControl('');
  password: FormControl = new FormControl('');

  constructor(private _user: UserService) {

    this.login.valueChanges
    .pipe(debounceTime(100))
    .subscribe(data => {
      this._user.setLogin(data)
    });

    this.password.valueChanges
    .pipe(debounceTime(100))
    .subscribe(data => {
      this._user.setPassword(data)}
    );

   }

  ngOnInit() {
  }

}
