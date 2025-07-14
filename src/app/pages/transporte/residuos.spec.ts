import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransporteComponent } from './transporte';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TransporteService } from './transporte.service';
import { Transporte } from './transporte.model';
import { Residuo } from './residuo.model';
import { CommonModule } from '@angular/common';

describe('TransporteComponent', () => {
  let component: TransporteComponent;
  let fixture: ComponentFixture<TransporteComponent>;
  let mockSvc: jasmine.SpyObj<TransporteService>;
  let mockToastr: jasmine.SpyObj<ToastrService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockSvc = jasmine.createSpyObj('TransporteService', ['getTransportes', 'getResiduos', 'createTransporte', 'updateTransporte']);
    mockToastr = jasmine.createSpyObj('ToastrService', ['error', 'success']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        TransporteComponent,
        ReactiveFormsModule,
        CommonModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: TransporteService, useValue: mockSvc },
        { provide: ToastrService, useValue: mockToastr },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar transportes y residuos en ngOnInit', () => {
    const mockTransporte: Transporte[] = [{
      id: 1, residuo: 'Lodo', cantidad: 5, origen: '', destino: '', patente: '',
      fechaSalida: '', fechaLlegada: '', transportista: '', conductor: '',
      guia: '', estadoTexto: '', items: []
    }];
    const mockResiduos: Residuo[] = [{ id: 1, name: 'Metal' }];

    mockSvc.getTransportes.and.returnValue(of(mockTransporte));
    mockSvc.getResiduos.and.returnValue(of(mockResiduos));

    component.ngOnInit();

    expect(component.enCurso.length).toBe(1);
    expect(component.residuos.length).toBe(1);
    expect(mockSvc.getTransportes).toHaveBeenCalled();
    expect(mockSvc.getResiduos).toHaveBeenCalled();
  });

  it('debería mostrar error si falla carga de transportes', () => {
    mockSvc.getTransportes.and.returnValue(throwError(() => new Error('error')));
    mockSvc.getResiduos.and.returnValue(of([]));

    component.ngOnInit();

    expect(mockToastr.error).toHaveBeenCalledWith('Error cargando transportes', 'Error');
  });

  it('debería registrar transporte correctamente', () => {
    mockSvc.createTransporte.and.returnValue(of({
      id: 1, residuo: 'Lodo', cantidad: 0, origen: '', destino: '', patente: '',
      fechaSalida: '', fechaLlegada: '', transportista: '', conductor: '',
      guia: '', estadoTexto: '', items: []
    }));

    component.form.setValue({
      transportista: 'Juan',
      residuoId: 1,
      obra: 'Obra A',
      conductor: 'Pedro',
      patente: 'AAA-1234',
      fechaSalida: '2025-07-14T12:00',
      fechaLlegada: '2025-07-14T14:00',
      guia: '123'
    });

    component.register();

    expect(mockSvc.createTransporte).toHaveBeenCalled();
    expect(mockToastr.success).toHaveBeenCalledWith('Transporte registrado', '¡Listo!');
  });

  it('no debería registrar si el formulario es inválido', () => {
    component.form.markAllAsTouched();
    component.register();

    expect(mockToastr.error).toHaveBeenCalledWith('Revisa los campos obligatorios', 'Validación');
    expect(mockSvc.createTransporte).not.toHaveBeenCalled();
  });

  it('debería abrir el modal de detalle correctamente', () => {
    const transporte: Transporte = {
      id: 1, residuo: 'Metal', cantidad: 3, origen: 'Obra A', destino: 'Relleno',
      patente: 'XYZ-9999', fechaSalida: '2025-07-14T08:00', fechaLlegada: '2025-07-14T09:00',
      transportista: 'Carlos', conductor: 'Juan', guia: '456', estadoTexto: 'En tránsito',
      items: [{ item: { id: 1 }, quantity: 3, unit: 'm3' }]
    };

    component.openDetalle(transporte);

    expect(component.selectedTransport).toEqual(transporte);
    expect(component.showDetalleModal).toBeTrue();
    expect(component.editMode).toBeFalse();
  });

  it('debería cerrar el modal y resetear el formulario', () => {
    component.showDetalleModal = true;
    component.editMode = true;
    component.form.patchValue({ transportista: 'A' });

    component.closeDetalle();

    expect(component.showDetalleModal).toBeFalse();
    expect(component.editMode).toBeFalse();
    expect(component.form.value.transportista).toBeNull();
  });

  it('logout debería limpiar storage y navegar al login', () => {
    spyOn(localStorage, 'clear');
    spyOn(sessionStorage, 'clear');

    component.logout();

    expect(localStorage.clear).toHaveBeenCalled();
    expect(sessionStorage.clear).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('debería devolver nombre de residuo por ID', () => {
    component.residuos = [{ id: 1, name: 'Papel' }];
    const name = component.getResiduoNombrePorId(1);
    expect(name).toBe('Papel');
  });

  it('debería devolver "(Desconocido)" si no encuentra el residuo', () => {
    component.residuos = [];
    const name = component.getResiduoNombrePorId(999);
    expect(name).toBe('(Desconocido)');
  });
});
