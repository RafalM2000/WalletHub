import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  messageValidatr;

  formModel: FormGroup = new FormGroup({
    user: new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')
    })
  });

  constructor(private _user: UserService) {}

  ngOnInit() {
  }

  onSubmit() {
    const form = this.formModel.value;
    if (form.user.login === '' || form.user.password === '') {
      this.messageValidatr = 'Login and password should be filled in';
      console.log(this.messageValidatr);
      return;
    }
    this._user.authentication(this.formModel.value);
    if (this._user.authentication(this.formModel.value) === false) {
      this.messageValidatr = 'Wrong login or password';
    }

  }

}
