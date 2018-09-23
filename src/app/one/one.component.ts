import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  messageFromOne: boolean;
  childData: string;

  constructor() { }

  ngOnInit() {
    this.messageFromOne = true;

    setInterval(() => {
      this.messageFromOne = Math.random() >= 0.5;
    }, 1000);
    }

}
