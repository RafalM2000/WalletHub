import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { UserService } from '../user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formModel: FormGroup = new FormGroup({
    user: new FormGroup({
      login: new FormControl(''),
      password: new FormControl('')
    })
  })

  constructor(private _user: UserService) {}

  ngOnInit() {
  }

  onSubmit() {
    this._user.authentication(this.formModel.value);

  }

}
