import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard';
import { Router, ActivatedRoute } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    mockActivatedRoute = {
      snapshot: {
        params: {},
        queryParams: {}
      }
    };

    await TestBed.configureTestingModule({
      imports: [DashboardComponent, NgChartsModule],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute } // 👈 SE AGREGA ESTO
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener etiquetas de gráfico circular definidas', () => {
    expect(component.pieChartLabels).toEqual(['Reciclado', 'Disposición final', 'Reutilizado', 'Otro']);
  });

  it('debería tener tipo de gráfico de barras como "bar"', () => {
    expect(component.barChartType).toBe('bar');
  });

  it('debería limpiar sesión y redirigir al login al hacer logout', () => {
    spyOn(localStorage, 'clear');
    spyOn(sessionStorage, 'clear');

    component.logout();

    expect(localStorage.clear).toHaveBeenCalled();
    expect(sessionStorage.clear).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });
});
