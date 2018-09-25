import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

import { TwoComponent } from './two.component';

describe('TwoComponent', () => {
  let component: TwoComponent;
  let fixture: ComponentFixture<TwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoComponent ],
      imports: [
        RouterTestingModule,
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

});
