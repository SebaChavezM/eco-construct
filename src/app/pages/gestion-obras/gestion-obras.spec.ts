import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionObrasComponent } from './gestion-obras';
import { Router } from '@angular/router';

describe('GestionObrasComponent', () => {
  let component: GestionObrasComponent;
  let fixture: ComponentFixture<GestionObrasComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [GestionObrasComponent],
      providers: [
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionObrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener 3 obras inicializadas', () => {
    expect(component.obras.length).toBe(3);
  });

  it('debería contener una obra con título "Torre Residencial Norte"', () => {
    const obra = component.obras.find(o => o.titulo === 'Torre Residencial Norte');
    expect(obra).toBeDefined();
    expect(obra?.ubicacion).toBe('Las Condes, Santiago');
  });

  it('logout debería limpiar sesión y redirigir al login', () => {
    spyOn(localStorage, 'clear');
    spyOn(sessionStorage, 'clear');

    component.logout();

    expect(localStorage.clear).toHaveBeenCalled();
    expect(sessionStorage.clear).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });
});
