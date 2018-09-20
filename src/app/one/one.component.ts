import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  messageFromOne: string = 'I like coding';
  public childData: string;

  constructor() { }

  ngOnInit() {

  }

}
