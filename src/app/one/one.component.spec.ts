import { async, ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { Location } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OneComponent } from './one.component';
import { OneDetailsComponent } from '../one-details/one-details.component';
import { TwoComponent } from '../moduleTwo/two/two.component';

describe('OneComponent', () => {
  let component: OneComponent;
  let fixture: ComponentFixture<OneComponent>;

  beforeEach(async(() => {
    const routs: Routes = [
      {  path: 'two', component: TwoComponent }
    ];
    TestBed.configureTestingModule({
      declarations: [
      OneComponent,
      OneDetailsComponent,
      MenuComponent,
      TwoComponent ],
      imports: [ RouterTestingModule.withRoutes(routs),
      FormsModule,
      ReactiveFormsModule ]
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

  it('should be able to navigate to /two', fakeAsync(inject([Router, Location],
    (router: Router, location: Location) => {
      router.navigate(['/two']);
      tick();
      expect (location.path()).toBe('/two');
    })
  ));

});
