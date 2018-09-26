import { async, ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import { Location } from '@angular/common';
import { Routes, Router } from '@angular/router';

import { TwoComponent } from './two.component';
import { HomeComponent } from '../../home/home.component';
import { MenuComponent } from '../../menu/menu.component';

describe('TwoComponent', () => {
  let component: TwoComponent;
  let fixture: ComponentFixture<TwoComponent>;

  beforeEach(async(() => {
    const routs: Routes = [
      {  path: 'home', component: HomeComponent }
    ];
    TestBed.configureTestingModule({
      declarations: [
      TwoComponent,
      HomeComponent ,
      MenuComponent
    ],
      imports: [
        RouterTestingModule.withRoutes(routs),
        FormsModule,
        ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has logout function', () => {
    expect(component.logout).toBeTruthy();
  });

  it('should has priceValidator function', () => {
    expect(component.priceValidator).toBeTruthy();
  });

  it('the priceValidator function result should be 123', () => {
    expect(component.priceValidator('123')).toBe('123');
  });

  it('the priceValidator function result should be abc', () => {
    expect(component.priceValidator('abc')).toBe('abc');
  });

  it('should render title in a h3 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('This is functional module - module two');
  }));

  it('should render string in a button(Logout) tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button.btn-warning').textContent).toContain('Logout');
  }));

  it('should render string in a button(Go back to root module) tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button.btn-primary').textContent).toContain('Go back to root module');
  }));

  it('should be able to navigate to /home', fakeAsync(inject([Router, Location],
    (router: Router, location: Location) => {
      router.navigate(['/home']);
      tick();
      expect (location.path()).toBe('/home');
    })
    ));
});
