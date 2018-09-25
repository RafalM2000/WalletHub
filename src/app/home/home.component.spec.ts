import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home.component';
import { MenuComponent } from '../menu/menu.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent,
      MenuComponent ],
      imports: [RouterTestingModule,
      BrowserAnimationsModule]
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

});
