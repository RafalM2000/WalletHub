import { Component, OnInit,  Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-one-details',
  templateUrl: './one-details.component.html',
  styleUrls: ['./one-details.component.scss']
})
export class OneDetailsComponent implements OnInit {

  @Input() message: boolean;
  @Output() childEvent = new EventEmitter<string>();
  errorMessage: string= '';
  changesCounter: number = 0;
  answer: string;

  constructor() { }

  ngOnInit() {
  }

  onChange(value: string) {
    this.childEvent.emit(value);
  }

  emailValidator(data) {    
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data))
    {

      return this.errorMessage = "This pattern emial is OK"
    }
    else {

    return this.errorMessage = "This pattern email is not OK"
    }
  }

  ngOnChanges() {
    if (this.message && this.message === true) {
      this.answer = 'Yes'
    } 
    else {
      this.answer = 'No'
    } 

    this.changesCounter++;
  }

}
