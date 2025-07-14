import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RegistroResiduosComponent } from './registro-residuos';
import { RegistroResiduosService } from './registro-residuos.service';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { of, throwError } from 'rxjs';

describe('RegistroResiduosComponent', () => {
  let component: RegistroResiduosComponent;
  let fixture: ComponentFixture<RegistroResiduosComponent>;
  let mockService: jasmine.SpyObj<RegistroResiduosService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('RegistroResiduosService', [
      'getCarriers',
      'getItems',
      'getWorkSites',
      'getTransportes',
      'getRegistros',
      'createRegistro',
      'actualizarEstadoTransporte'
    ]);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [RegistroResiduosComponent, MatSnackBarModule],
      providers: [
        { provide: RegistroResiduosService, useValue: mockService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroResiduosComponent);
    component = fixture.componentInstance;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar datos en ngOnInit', fakeAsync(() => {
    mockService.getCarriers.and.returnValue(of([{ id: 1, carrier: 'Juan' }]));
    mockService.getItems.and.returnValue(of([{ id: 1, name: 'Metal', unit: 'kg' }]));
    mockService.getWorkSites.and.returnValue(of([{ id: 1, name: 'Obra A' }]));
    mockService.getTransportes.and.returnValue(of([
    {
        id: 1,
        driver: 'Pedro',
        destiny: 'Obra A',
        estadoTexto: 'Asignado',
        status: { id: 1, name: 'Asignado' },
        fechaLlegada: '2024-07-10',
        fechaSalida: '2024-07-12',
        trackingNumber: 'G123',
        origen: 'Bodega Central',
        patent: 'ABC123',
        residuo: 'Metal',
        carrier: 'Juan',
        cantidad: 10,
        items: [
        {
            item: {
            id: 1,
            name: 'Metal',
            reference: 'REF001'
            },
            quantity: 10,
            unit: 'kg'
        }
        ]
    }
    ]));

    mockService.getRegistros.and.returnValue(of([]));

    fixture.detectChanges();
    tick();

    expect(component.responsables.length).toBe(1);
    expect(component.tipos.length).toBe(1);
    expect(component.obras.length).toBe(1);
    expect(component.transportes.length).toBe(1);
  }));

  it('debería mostrar error si no se selecciona responsable', () => {
    const snackSpy = spyOn(component['snack'], 'open');
    component.registro = {
      ...component.registro,
      carrierId: 0,
      workSiteId: 1,
      items: [{ item: { id: 1 }, quantity: 10 }]
    };

    component.submit();

    expect(snackSpy).toHaveBeenCalledWith('Selecciona un responsable', 'Cerrar', jasmine.anything());
  });

  it('debería mostrar error si no se selecciona obra', () => {
    const snackSpy = spyOn(component['snack'], 'open');
    component.registro = {
      ...component.registro,
      carrierId: 1,
      workSiteId: 0,
      items: [{ item: { id: 1 }, quantity: 10 }]
    };

    component.submit();

    expect(snackSpy).toHaveBeenCalledWith('Selecciona la obra', 'Cerrar', jasmine.anything());
  });

  it('debería mostrar error si no hay tipo/cantidad', () => {
    const snackSpy = spyOn(component['snack'], 'open');
    component.registro = {
      ...component.registro,
      carrierId: 1,
      workSiteId: 1,
      items: [{ item: { id: 0 }, quantity: 0 }]
    };

    component.submit();

    expect(snackSpy).toHaveBeenCalledWith('Selecciona el tipo de residuo y la cantidad', 'Cerrar', jasmine.anything());
  });

  it('debería registrar correctamente sin transporte asociado', fakeAsync(() => {
    const snackSpy = spyOn(component['snack'], 'open');
    component.registro = {
      carrierId: 1,
      workSiteId: 1,
      inventoryStatusId: 1,
      comments: '',
      items: [{ item: { id: 1 }, quantity: 10 }],
      photos: [],
      transporteId: 0
    };
    mockService.createRegistro.and.returnValue(of({}));

    component.submit();
    tick();

    expect(snackSpy).toHaveBeenCalledWith('Residuo registrado', 'Cerrar', jasmine.anything());
  }));

  it('debería actualizar transporte si está presente', fakeAsync(() => {
    const snackSpy = spyOn(component['snack'], 'open');

    component.registro = {
      carrierId: 1,
      workSiteId: 1,
      inventoryStatusId: 1,
      comments: '',
      items: [{ item: { id: 1 }, quantity: 10 }],
      photos: [],
      transporteId: 99
    };

    mockService.createRegistro.and.returnValue(of({}));
    mockService.actualizarEstadoTransporte.and.returnValue(of({}));

    component.submit();
    tick();

    expect(mockService.actualizarEstadoTransporte).toHaveBeenCalledWith(99, 3);
    expect(snackSpy).toHaveBeenCalledWith('Residuo registrado y transporte actualizado', 'Cerrar', jasmine.anything());
  }));

  it('debería manejar error al registrar', fakeAsync(() => {
    const snackSpy = spyOn(component['snack'], 'open');
    component.registro = {
      carrierId: 1,
      workSiteId: 1,
      inventoryStatusId: 1,
      comments: '',
      items: [{ item: { id: 1 }, quantity: 10 }],
      photos: [],
      transporteId: 0
    };
    mockService.createRegistro.and.returnValue(throwError(() => new Error('Error')));

    component.submit();
    tick();

    expect(snackSpy).toHaveBeenCalledWith('Error al registrar residuo', 'Cerrar', jasmine.anything());
  }));

  it('debería asignar valores al seleccionar servicio', () => {
    component.obras = [{ id: 1, name: 'Obra A' }];
    component.responsables = [{ id: 1, carrier: 'Juan' }];
    component.transportes = [{
    id: 2,
    destiny: 'Obra A',
    carrier: 'Juan',
    driver: 'Pedro',
    patent: 'ABC123',
    trackingNumber: 'G123',
    residuo: 'Metal',
    cantidad: 10,
    estadoTexto: 'Asignado',
    origen: 'Bodega Central',
    fechaLlegada: '2024-07-10',
    fechaSalida: '2024-07-12',
    status: { id: 1, name: 'Asignado' }, // ✅ Asegúrate de incluir 'name'
    items: [
        {
        item: {
            id: 1,
            name: 'Metal',
            reference: 'REF001'
        },
        quantity: 10,
        unit: 'kg'
        }
    ]
    }];

    component.servicioSeleccionado = 2;

    component.onSeleccionServicio();

    expect(component.tipoResiduoSeleccionado).toBe('Metal');
    expect(component.unidadSeleccionada).toBe('kg');
    expect(component.obraNombreSeleccionada).toBe('Obra A');
    expect(component.responsableNombreSeleccionado).toBe('Juan');
  });

  it('logout debe limpiar sesión y redirigir a login', () => {
    spyOn(localStorage, 'clear');
    spyOn(sessionStorage, 'clear');

    component.logout();

    expect(localStorage.clear).toHaveBeenCalled();
    expect(sessionStorage.clear).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });
});
