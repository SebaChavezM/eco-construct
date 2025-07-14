import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilComponent } from './perfil';
import { Router } from '@angular/router';
import { AuthService } from '../../guards/auth.service';
import { UserProfile } from './user-profile.model';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  const mockUser: UserProfile = {
    id: 1,
    username: 'admin',
    fullName: 'Administrador General',
    email: 'admin@ecoconstruct.com',
    role: 'Admin',
    phone: '123456789',
    position: 'Gerente de Proyecto',
    company: 'EcoConstruct',
    location: 'Santiago, Chile',
    biography: 'Responsable de supervisar la operación general.',
    avatarUrl: 'https://via.placeholder.com/120'
  };

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockAuthService = jasmine.createSpyObj('AuthService', ['getUserProfile']);

    await TestBed.configureTestingModule({
      imports: [PerfilComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: AuthService, useValue: mockAuthService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => 'mock-id'
              }
            },
            params: of({ id: 'mock-id' })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar perfil de usuario en ngOnInit si existe', () => {
    mockAuthService.getUserProfile.and.returnValue(mockUser);

    component.ngOnInit();

    expect(component.user).toEqual(mockUser);
    expect(mockAuthService.getUserProfile).toHaveBeenCalled();
  });

  it('no debería modificar el usuario si no hay perfil en AuthService', () => {
    mockAuthService.getUserProfile.and.returnValue(null);

    component.ngOnInit();

    expect(component.user.id).toBe(-1);
    expect(mockAuthService.getUserProfile).toHaveBeenCalled();
  });

  it('debería contener estadísticas predefinidas', () => {
    expect(component.stats.length).toBe(4);
    expect(component.stats[0].label).toBe('Obras gestionadas');
  });

  it('debería contener actividades recientes', () => {
    expect(component.activities.length).toBe(3);
    expect(component.activities[0].title).toBe('Registro de residuos');
  });

  it('logout debería limpiar el storage y redirigir al login', () => {
    spyOn(localStorage, 'clear');
    spyOn(sessionStorage, 'clear');

    component.logout();

    expect(localStorage.clear).toHaveBeenCalled();
    expect(sessionStorage.clear).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });
});
