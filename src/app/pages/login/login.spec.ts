import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, LoginComponent, FormsModule],
      providers: [{ provide: Router, useValue: spy }]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería iniciar sesión correctamente con credenciales válidas', () => {
    component.email = 'admin@ecoconstruct.com';
    component.password = 'admin123';

    const mockEvent = new Event('submit');
    spyOn(mockEvent, 'preventDefault');

    component.onSubmit(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
    expect(component.showError).toBeFalse();
  });

  it('debería mostrar error con credenciales incorrectas', () => {
    component.email = 'usuario@invalido.com';
    component.password = 'wrongpass';

    const mockEvent = new Event('submit');
    spyOn(mockEvent, 'preventDefault');

    component.onSubmit(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(component.showError).toBeTrue();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });

  it('debería alternar visibilidad de contraseña con togglePassword()', () => {
    expect(component.showPassword).toBeFalse();
    component.togglePassword();
    expect(component.showPassword).toBeTrue();
    component.togglePassword();
    expect(component.showPassword).toBeFalse();
  });

  it('debería redirigir al dashboard al usar login()', () => {
    component.login();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard']);
  });
});
