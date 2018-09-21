import { Component, OnInit, NgModule } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


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
price: string;

  constructor() { }

  ngOnInit() {
  }

}
