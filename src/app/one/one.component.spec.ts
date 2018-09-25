import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuComponent } from '../menu/menu.component';
import {RouterTestingModule} from '@angular/router/testing';

import { OneComponent, } from './one.component';
import { OneDetailsComponent } from '../one-details/one-details.component';

describe('OneComponent', () => {
  let component: OneComponent;
  let fixture: ComponentFixture<OneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
      OneComponent,
      OneDetailsComponent,
      MenuComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
