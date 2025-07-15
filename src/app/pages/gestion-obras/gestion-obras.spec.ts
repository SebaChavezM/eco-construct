import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionObrasComponent } from './gestion-obras';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('GestionObrasComponent', () => {
  let component: GestionObrasComponent;
  let fixture: ComponentFixture<GestionObrasComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [GestionObrasComponent, RouterTestingModule],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionObrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener una lista de obras definida', () => {
    expect(component.obras.length).toBeGreaterThan(0);
  });

  it('logout debería limpiar almacenamiento y redirigir a login', () => {
    localStorage.setItem('test', 'value');
    sessionStorage.setItem('test', 'value');

    component.logout();

    expect(localStorage.getItem('test')).toBeNull();
    expect(sessionStorage.getItem('test')).toBeNull();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });
});
