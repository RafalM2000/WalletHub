import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
      RouterTestingModule,
      FormsModule,
      ReactiveFormsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit(); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have onSubmit function', () => {
    expect(component.onSubmit).toBeTruthy();
  });

  it('should render string in a button(Submit) tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Submit');
  }));

  it('form invalid when empty', () => {
    let login = component.formModel.controls['login']; 
    let password = component.formModel.controls['password']; 
    login.setValue("test");
    password.setValue("test");
    // component.formModel.value.user.login = "jon";
    // component.formModel.value.user.password = "xxx";
    expect(login).toBe('test');
   });


 });
