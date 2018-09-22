import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
  animations: [
    trigger('fade', [
      // state(),
      transition('void => *', [
        style({ opacity: 0}),
        animate(9000, style({opacity: 1}))
      ])
    ])
  ]
})
export class TwoComponent implements OnInit {
name: string = '';
price: string;
priceIsNumber: boolean = false;

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

  priceValidator(data) {
    this.price = data;
    if (isNaN(data)) {
      this.priceIsNumber = false;
    }  
    else {
      this.priceIsNumber = true;
    }
  }
}
