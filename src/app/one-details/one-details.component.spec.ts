import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDetailsComponent } from './one-details.component';

describe('OneDetailsComponent', () => {
  let component: OneDetailsComponent;
  let fixture: ComponentFixture<OneDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
