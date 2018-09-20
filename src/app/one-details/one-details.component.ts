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
  errorMessage: string= '';

  constructor() { }

  ngOnInit() {
  }

  onChange(value: string) {
    this.childEvent.emit(value);
  }

  emailValidator(data) {    
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data))
    {

      return this.errorMessage = "This emial is OK"
    }
    else {

    return this.errorMessage = "This email is not OK"
    }

  }

}
