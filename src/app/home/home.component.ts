import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      // state(),
      transition('void => *', [
        style({opacity: 0}),
        animate(4000, style({opacity: 1}))
      ])
    ])
  ]
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
