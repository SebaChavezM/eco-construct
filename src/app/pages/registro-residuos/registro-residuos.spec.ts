import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RegistroResiduosComponent } from './registro-residuos';
import { RegistroResiduosService } from './registro-residuos.service';
import { of, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('RegistroResiduosComponent', () => {
  let component: RegistroResiduosComponent;
  let fixture: ComponentFixture<RegistroResiduosComponent>;
  let mockService: jasmine.SpyObj<RegistroResiduosService>;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('RegistroResiduosService', [
      'getCarriers', 'getItems', 'getWorkSites', 'getTransportes', 'getRegistros',
      'createRegistro', 'actualizarEstadoTransporte'
    ]);

    await TestBed.configureTestingModule({
      imports: [
        RegistroResiduosComponent,
        FormsModule,
        RouterTestingModule,
        MatSnackBarModule
      ],
      providers: [
        { provide: RegistroResiduosService, useValue: mockService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroResiduosComponent);
    component = fixture.componentInstance;
  });

  it('debería inicializar cargando datos', fakeAsync(() => {
    mockService.getCarriers.and.returnValue(of([{ id: 1, carrier: 'Test Carrier' }]));
    mockService.getItems.and.returnValue(of([{ id: 1, name: 'Residuo', unit: 'kg' }]));
    mockService.getWorkSites.and.returnValue(of([{ id: 1, name: 'Obra A' }]));
    mockService.getTransportes.and.returnValue(of([]));
    mockService.getRegistros.and.returnValue(of([]));

    fixture.detectChanges();
    tick();

    expect(component.responsables.length).toBe(1);
    expect(component.tipos.length).toBe(1);
    expect(component.obras.length).toBe(1);
  }));

  it('debería mostrar error si falta obra', () => {
    spyOn(component['snack'], 'open');

    component.registro.carrierId = 1;
    component.submit();

    expect(component['snack'].open).toHaveBeenCalledWith(
      'Selecciona la obra',
      'Cerrar',
      jasmine.objectContaining({ panelClass: ['snack-error'] })
    );
  });

  it('debería enviar el registro si todo es válido', fakeAsync(() => {
    component.registro = {
      workSiteId: 1,
      inventoryStatusId: 1,
      carrierId: 1,
      comments: '',
      items: [{ item: { id: 1 }, quantity: 10 }],
      transporteId: 0
    };
    component.unidadSeleccionada = 'kg';
    component.responsableNombreSeleccionado = 'Responsable';
    component.conductorSeleccionado = 'Juan';
    component.patenteSeleccionada = 'AA1234';
    component.guiaSeleccionada = 'G123';

    mockService.createRegistro.and.returnValue(of({}));

    spyOn(component['snack'], 'open');

    component.submit();
    tick();

    expect(mockService.createRegistro).toHaveBeenCalled();
    expect(component['snack'].open).toHaveBeenCalledWith('Residuo registrado', 'Cerrar', jasmine.any(Object));
  }));

  it('debería manejar error al enviar registro', fakeAsync(() => {
    component.registro = {
      workSiteId: 1,
      inventoryStatusId: 1,
      carrierId: 1,
      comments: '',
      items: [{ item: { id: 1 }, quantity: 10 }],
      transporteId: 0
    };
    component.unidadSeleccionada = 'kg';
    component.responsableNombreSeleccionado = 'Responsable';
    component.conductorSeleccionado = 'Juan';
    component.patenteSeleccionada = 'AA1234';
    component.guiaSeleccionada = 'G123';

    mockService.createRegistro.and.returnValue(throwError(() => new Error('Error')));

    spyOn(component['snack'], 'open');

    component.submit();
    tick();

    expect(component['snack'].open).toHaveBeenCalledWith('Error al registrar residuo', 'Cerrar', jasmine.any(Object));
  }));
});
