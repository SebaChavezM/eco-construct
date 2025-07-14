import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [LoginComponent, FormsModule, CommonModule],
      providers: [{ provide: Router, useValue: mockRouter }]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería navegar al dashboard con credenciales válidas', () => {
    component.email = 'admin@ecoconstruct.com';
    component.password = 'admin123';

    const fakeEvent = { preventDefault: () => {} } as Event;
    spyOn(fakeEvent, 'preventDefault');

    component.onSubmit(fakeEvent);

    expect(fakeEvent.preventDefault).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']);
    expect(component.showError).toBeFalse();
  });

  it('debería mostrar error con credenciales inválidas', () => {
    component.email = 'user@demo.com';
    component.password = 'wrongpass';

    const fakeEvent = { preventDefault: () => {} } as Event;
    spyOn(fakeEvent, 'preventDefault');

    component.onSubmit(fakeEvent);

    expect(fakeEvent.preventDefault).toHaveBeenCalled();
    expect(mockRouter.navigate).not.toHaveBeenCalled();
    expect(component.showError).toBeTrue();
  });

  it('togglePassword debería alternar visibilidad', () => {
    expect(component.showPassword).toBeFalse();
    component.togglePassword();
    expect(component.showPassword).toBeTrue();
    component.togglePassword();
    expect(component.showPassword).toBeFalse();
  });

  it('login() debería navegar al dashboard', () => {
    component.login();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']);
  });
});
