import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReportesComponent } from './reportes';
import { ReportesService } from './reportes.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('ReportesComponent', () => {
  let component: ReportesComponent;
  let fixture: ComponentFixture<ReportesComponent>;
  let mockService: jasmine.SpyObj<ReportesService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('ReportesService', [
      'getResumenStats',
      'getDistribucionTipos',
      'getDatosMensuales'
    ]);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [ReportesComponent],
      providers: [
        { provide: ReportesService, useValue: mockService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportesComponent);
    component = fixture.componentInstance;
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar y procesar datos en ngOnInit', fakeAsync(() => {
    mockService.getResumenStats.and.returnValue(of({
      totalGenerado: 100,
      reciclado: 40,
      eficienciaGlobal: 85,
      obrasActivas: 3
    }));
    mockService.getDistribucionTipos.and.returnValue(of([
      { tipo: 'Metal', cantidad: 20 },
      { tipo: 'Plástico', cantidad: 10 }
    ]));
    mockService.getDatosMensuales.and.returnValue(of([
      { mes: 'Enero', generado: 50, reciclado: 20, tratado: 10 },
      { mes: 'Febrero', generado: 50, reciclado: 20, tratado: 10 }
    ]));

    fixture.detectChanges();
    tick();

    expect(component.stats.length).toBe(4);
    expect(component.distribution.length).toBe(2);
    expect(component.monthly.length).toBe(2);
  }));

  it('debería ejecutar logout correctamente', () => {
    spyOn(localStorage, 'clear');
    spyOn(sessionStorage, 'clear');

    component.logout();

    expect(localStorage.clear).toHaveBeenCalled();
    expect(sessionStorage.clear).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });
});
