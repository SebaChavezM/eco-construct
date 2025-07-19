import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PerfilComponent } from './perfil';
import { AuthService } from '../../guards/auth.service';
import { of, throwError } from 'rxjs';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: '<p>Login</p>',
})
class DummyComponent {}

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

    const mockUser = {
    id: 1,
    username: 'user',
    password: 'password',
    role: 'Admin',
    fullName: 'Juan Pérez',
    email: 'juan@example.com',
    position: 'Gerente',
    company: 'EcoConstruct',
    address: 'Av. Siempre Viva 123',
    phone: '123456789',
    location: 'CDMX',
    biography: 'Bio de prueba',
    createdAt: '',
    updatedAt: ''
    };

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('AuthService', ['getUserProfile']);

    await TestBed.configureTestingModule({
      imports: [PerfilComponent, DummyComponent],
      providers: [
        { provide: AuthService, useValue: spy },
        provideRouter([
          { path: 'login', component: DummyComponent }
        ])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería limpiar storage y redirigir al login al hacer logout', () => {
    spyOn(component['router'], 'navigate');
    localStorage.setItem('dummy', '1');
    sessionStorage.setItem('dummy', '1');

    component.logout();

    expect(localStorage.getItem('dummy')).toBeNull();
    expect(sessionStorage.getItem('dummy')).toBeNull();
    expect(component['router'].navigate).toHaveBeenCalledWith(['/login']);
  });

  it('debería manejar error si falla la carga del perfil', () => {
    const error = new Error('Falló la carga');
    spyOn(console, 'error');
    authServiceSpy.getUserProfile.and.returnValue(throwError(() => error));

    fixture.detectChanges();

    expect(console.error).toHaveBeenCalledWith('Error al cargar perfil:', error);
  });
});
