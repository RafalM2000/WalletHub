import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  name: string = '';
  constructor(private _router: Router, private _user: UserService) { }

  ngOnInit() {
    this._user.checkAuthentication();
    this.name =  localStorage.getItem('login');
  }

  logout() {
    localStorage.setItem('login', '');
    localStorage.setItem('IsUsereAuthorised', 'No');
    this._router.navigate(["/login"]);
    
  }
}
