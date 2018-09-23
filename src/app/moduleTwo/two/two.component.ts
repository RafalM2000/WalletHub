import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent implements OnInit {
name: string;
price: string;
priceIsNumber: boolean;
anyThing: string;

  constructor(private _router: Router, private _user: UserService) { }

  ngOnInit() {
    this.name = '';
    this._user.checkAuthentication();
    this.name =  localStorage.getItem('login');
  }

  logout() {
    localStorage.setItem('login', '');
    localStorage.setItem('IsUsereAuthorised', 'No');
    this._router.navigate(['/login']);
  }

  priceValidator(data) {
    this.price = data;
    if (isNaN(data)) {
      this.priceIsNumber = false;
    } else {
      this.priceIsNumber = true;
    }
  }
}
