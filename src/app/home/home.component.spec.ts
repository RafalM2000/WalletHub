import { async, ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Location } from '@angular/common';
import { Routes, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { MenuComponent } from '../menu/menu.component';
import { TwoComponent } from '../moduleTwo//two/two.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    const routs: Routes = [
      { path: 'two', component: TwoComponent }
    ];
    TestBed.configureTestingModule({
      declarations: [
      HomeComponent,
      MenuComponent,
      TwoComponent],
      imports: [
      RouterTestingModule.withRoutes(routs),
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have show function', () => {
    expect(component.show).toBeTruthy();
  });

  it('should render title in a h3 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('This application shows some Angular features, like:');
  }));

  it('should hide details information', async(() => {
    const home = fixture.debugElement.componentInstance;
    expect(home.isHidden).toEqual(true);
  }));

  it('should render string in a button(Logout) tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button.btn-warning').textContent).toContain('Logout');
  }));

  it('should render string in a button(movement to module two) tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button.btn-primary').textContent).toContain('Goto module two');
  }));

  it('should render string in a button(show details) tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button.btn-success').textContent).toContain('show me more');
  }));

  it('should be able to navigate to /two', fakeAsync(inject([Router, Location],
    (router: Router, location: Location) => {
      router.navigate(['/two']);
      tick();
      expect (location.path()).toBe('/two');
    })
  ));

});
