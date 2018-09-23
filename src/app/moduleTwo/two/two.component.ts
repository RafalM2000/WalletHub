import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
})
export class TwoComponent implements OnInit {
name: string;
price: string;

  constructor(private _router: Router) { }

  ngOnInit() {
    this.name = '';
    this.name =  localStorage.getItem('login');
  }

  logout() {
    localStorage.setItem('login', '');
    localStorage.setItem('IsUsereAuthorised', 'No');
    this._router.navigate(['/login']);
  }

  priceValidator(data) {
    this.price = data;
  }
}
