import { Component, OnInit,  Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-one-details',
  templateUrl: './one-details.component.html',
  styleUrls: ['./one-details.component.scss']
})
export class OneDetailsComponent implements OnInit {

  @Input() message: string;
  @Output() childEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onChange(value: string) {
    this.childEvent.emit(value);
  }

}
