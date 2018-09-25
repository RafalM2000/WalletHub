import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneComponent } from '../one/one.component';
import { OneDetailsComponent } from './one-details.component';
import { MenuComponent } from '../menu/menu.component';

describe('OneDetailsComponent', () => {
  let component: OneDetailsComponent;
  let fixture: ComponentFixture<OneDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OneComponent,
        OneDetailsComponent,
        MenuComponent ]
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

  it('should has emailValidator', () => {
    expect(component.emailValidator).toBeTruthy();
  });

  it('function emailValidator should be: This pattern emial is OK', () => {
    expect(component.emailValidator('rfm@encodeURIComponent.com')).toBe('This pattern emial is OK');
  });

  it('function emailValidator should be: This pattern email is not OK', () => {
    expect(component.emailValidator('abcd')).toBe('This pattern email is not OK');
  });

  it('function emailValidator should be: This pattern email is not OK', () => {
    expect(component.emailValidator('')).toBe('This pattern email is not OK');
  });

  it('should has onChange', () => {
    expect(component.onChange).toBeTruthy();
  });


   it('should render title in a h4 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('and this is nested component in component One.');
  }));

  it('should render title in a span tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Please enter your email adress:');
  }));

});
