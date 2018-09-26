import { async, ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import { Location } from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import { Routes, Router } from '@angular/router';

import { MenuComponent } from './menu.component';
import { HomeComponent } from '../home/home.component';
import { OneComponent } from '../one/one.component';
import { OneDetailsComponent } from '../one-details/one-details.component';



describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  const routs: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'one', component: OneComponent }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent,
        HomeComponent,
        OneComponent,
        OneDetailsComponent],
      imports: [
        RouterTestingModule.withRoutes(routs)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has logout function', () => {
    expect(component.logout).toBeTruthy();
  });

  it('should render string in a button(Logout) tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button.btn-warning').textContent).toContain('Logout');
  }));

  it('should be able to navigate to /home', fakeAsync(inject([Router, Location],
  (router: Router, location: Location) => {
    router.navigate(['/home']);
    tick();
    expect (location.path()).toBe('/home');
  })
  ));

it('should be able to navigate to /one', fakeAsync(inject([Router, Location],
  (router: Router, location: Location) => {
    router.navigate(['/one']);
    tick();
    expect (location.path()).toBe('/one');
  })
));

});

