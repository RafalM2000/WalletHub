import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isHidden: boolean = true;
  buttonMessage: string = 'show me more';

  constructor() { }

  ngOnInit() {
  }

  show() {
    this.isHidden = !this.isHidden;
    if (this.isHidden === true) {
      this.buttonMessage = "show me more"
    }
    else {
      this.buttonMessage = "hide below info"
    }
  }
}
