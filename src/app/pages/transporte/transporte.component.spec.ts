import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError, BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { provideRouter } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { TransporteComponent } from './transporte';
import { TransporteService } from './transporte.service';
import { Residuo } from './residuo.model';
import { Transporte } from './transporte.model';

describe('TransporteComponent', () => {
  let component: TransporteComponent;
  let fixture: ComponentFixture<TransporteComponent>;
  let mockService: jasmine.SpyObj<TransporteService>;
  let mockToastr: jasmine.SpyObj<ToastrService>;

  const residuosMock: Residuo[] = [
    { id: 1, name: 'Plástico' },
    { id: 2, name: 'Metal' }
  ];

  const transporteMock: Transporte = {
    id: 1,
    residuo: 'Plástico',
    cantidad: 0,
    origen: 'Bodegas EcoConstruct',
    destino: 'Obra A',
    patente: 'ABC-1234',
    fechaSalida: '2024-01-01T10:00',
    fechaLlegada: '2024-01-01T12:00',
    transportista: 'EcoTransport',
    conductor: 'Juan Pérez',
    guia: '12345',
    estadoTexto: 'En tránsito',
    items: [{
      item: { id: 1 },
      quantity: 0,
      unit: 'No especifica'
    }]
  };

  const mockActivatedRoute = {
    url: new BehaviorSubject([]),
    snapshot: {},
    params: of({}),
    queryParams: of({}),
    fragment: of(''),
    data: of({})
  };

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('TransporteService', ['getTransportes', 'getResiduos', 'createTransporte', 'updateTransporte']);
    mockToastr = jasmine.createSpyObj('ToastrService', ['error', 'success']);

    await TestBed.configureTestingModule({
      imports: [
        TransporteComponent,
        ReactiveFormsModule
      ],
      providers: [
        { provide: TransporteService, useValue: mockService },
        { provide: ToastrService, useValue: mockToastr },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TransporteComponent);
    component = fixture.componentInstance;
  });

  it('debería cargar residuos y transportes al iniciar', () => {
    mockService.getTransportes.and.returnValue(of([transporteMock]));
    mockService.getResiduos.and.returnValue(of(residuosMock));

    component.ngOnInit();

    expect(mockService.getTransportes).toHaveBeenCalled();
    expect(mockService.getResiduos).toHaveBeenCalled();
  });

  it('debería mostrar error si la carga de transportes falla', () => {
    mockService.getTransportes.and.returnValue(throwError(() => new Error('fail')));
    mockService.getResiduos.and.returnValue(of(residuosMock));

    component.ngOnInit();

    expect(mockToastr.error).toHaveBeenCalledWith('Error cargando transportes', 'Error');
  });

  it('debería registrar un transporte válido', () => {
    mockService.createTransporte.and.returnValue(of(transporteMock));
    mockService.getTransportes.and.returnValue(of([]));
    mockService.getResiduos.and.returnValue(of(residuosMock));

    component.ngOnInit();

    component.form.patchValue({
      transportista: 'EcoTransport',
      residuoId: 1,
      cantidad: 0,
      unidad: 'No especifica',
      obra: 'Obra A',
      conductor: 'Juan Pérez',
      patente: 'ABC-1234',
      fechaSalida: '2024-01-01T10:00',
      fechaLlegada: '2024-01-01T12:00',
      guia: '12345'
    });

    component.register();

    expect(mockService.createTransporte).toHaveBeenCalled();
    expect(mockToastr.success).toHaveBeenCalledWith('Transporte registrado', '¡Listo!');
  });

  it('no debería registrar transporte si el formulario es inválido', () => {
    component.form.patchValue({
      transportista: '',
      residuoId: '',
      obra: '',
      conductor: '',
      patente: '',
      fechaSalida: '',
      fechaLlegada: '',
      guia: ''
    });

    component.register();

    expect(mockToastr.error).toHaveBeenCalledWith('Revisa los campos obligatorios', 'Validación');
    expect(mockService.createTransporte).not.toHaveBeenCalled();
  });

  it('debería abrir el detalle y asignar transporte seleccionado', () => {
    component.openDetalle(transporteMock);
    expect(component.selectedTransport).toEqual(transporteMock);
    expect(component.showDetalleModal).toBeTrue();
  });

  it('debería cerrar modal y limpiar formulario', () => {
    component.showDetalleModal = true;
    component.editMode = true;
    component.closeDetalle();

    expect(component.showDetalleModal).toBeFalse();
    expect(component.editMode).toBeFalse();
  });

  it('debería retornar nombre del residuo por id', () => {
    component.residuos = residuosMock;
    const nombre = component.getResiduoNombrePorId(2);
    expect(nombre).toBe('Metal');
  });

  it('debería retornar clase de badge correcta', () => {
    expect(component.getEstadoBadgeClass('Entregado')).toBe('bg-secondary');
    expect(component.getEstadoBadgeClass('En tránsito')).toBe('bg-success');
  });
});
