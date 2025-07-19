import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReportesComponent } from './reportes';
import { ReportesService } from './reportes.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('ReportesComponent', () => {
  let component: ReportesComponent;
  let fixture: ComponentFixture<ReportesComponent>;
  let mockService: jasmine.SpyObj<ReportesService>;

  const mockStats = {
    totalGenerado: 100,
    reciclado: 40,
    eficienciaGlobal: 40,
    obrasActivas: 3
  };

  const mockDistribucion = [
    { tipo: 'Plástico', cantidad: 30 },
    { tipo: 'Metal', cantidad: 20 }
  ];

  const mockMensual = [
    { mes: 'Ene', generado: 30, reciclado: 10, tratado: 5 },
    { mes: 'Feb', generado: 70, reciclado: 30, tratado: 15 }
  ];

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('ReportesService', [
      'getResumenStats',
      'getDistribucionTipos',
      'getDatosMensuales'
    ]);

    mockService.getResumenStats.and.returnValue(of(mockStats));
    mockService.getDistribucionTipos.and.returnValue(of(mockDistribucion));
    mockService.getDatosMensuales.and.returnValue(of(mockMensual));

    await TestBed.configureTestingModule({
      imports: [ReportesComponent, RouterTestingModule, CommonModule, FormsModule],
      providers: [{ provide: ReportesService, useValue: mockService }]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar datos correctamente en ngOnInit', fakeAsync(() => {
    component.ngOnInit();
    tick();

    expect(mockService.getResumenStats).toHaveBeenCalled();
    expect(mockService.getDistribucionTipos).toHaveBeenCalled();
    expect(mockService.getDatosMensuales).toHaveBeenCalled();

    expect(component.stats.length).toBe(4);
    expect(component.stats[0].label).toContain('Total Generado');
    expect(component.monthly.length).toBe(2);
    expect(component.distribution.length).toBe(2);
  }));

  it('debería limpiar sesión y navegar a login al hacer logout', () => {
    spyOn(localStorage, 'clear');
    spyOn(sessionStorage, 'clear');
    const navigateSpy = spyOn((component as any).router, 'navigate');

    component.logout();

    expect(localStorage.clear).toHaveBeenCalled();
    expect(sessionStorage.clear).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });
});
