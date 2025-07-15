import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilComponent } from './perfil';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { AuthService } from '../../guards/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { UserProfile } from './user-profile.model';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['getUserProfile']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [PerfilComponent, RouterTestingModule],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set user on ngOnInit success', () => {
    const mockUser: UserProfile = {
      id: 1,
      username: 'sebastian',
      password: '',
      role: 'admin',
      fullName: 'Sebastián Chávez',
      email: 'sebastian@example.com',
      position: 'Ingeniero',
      company: 'Praxa',
      address: 'Concepción',
      phone: '123456789',
      location: 'Chile',
      biography: 'Desarrollador de software',
      createdAt: '',
      updatedAt: '',
      avatarUrl: ''
    };

    authServiceSpy.getUserProfile.and.returnValue(of(mockUser));
    fixture.detectChanges();

    expect(component.user).toBeTruthy();
    expect(component.user!.fullName).toBe('Sebastián Chávez');
    expect(component.user!.avatarUrl).toContain('cdn-icons-png');
  });

  it('should handle error on ngOnInit failure', () => {
    spyOn(console, 'error');
    authServiceSpy.getUserProfile.and.returnValue(throwError(() => new Error('Error')));
    fixture.detectChanges();

    expect(component.user).toBeNull();
    expect(console.error).toHaveBeenCalled();
  });

  it('should clear storage and navigate on logout', () => {
    localStorage.setItem('key', 'value');
    sessionStorage.setItem('key', 'value');

    component.logout();

    expect(localStorage.getItem('key')).toBeNull();
    expect(sessionStorage.getItem('key')).toBeNull();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });
});
