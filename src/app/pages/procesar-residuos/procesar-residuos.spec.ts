import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ProcesarResiduosComponent } from './procesar-residuos';
import { of, throwError } from 'rxjs';
import { InventoryService } from '../inventario/inventory.service';
import { AuthService } from '../../guards/auth.service';
import { Inventory } from '../inventario/inventory.model';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

describe('ProcesarResiduosComponent', () => {
  let component: ProcesarResiduosComponent;
  let fixture: ComponentFixture<ProcesarResiduosComponent>;
  let mockInventoryService: jasmine.SpyObj<InventoryService>;
  let mockAuthService: jasmine.SpyObj<AuthService>;

  const mockInventory: Inventory = {
    id: 1,
    items: [{
      item: { id: 1, name: 'Madera' },
      quantity: 5,
      unit: 'kg'
    }],
    workSite: { id: 1, name: 'Obra 1' },
    carrier: { id: 1 },
    inventoryStatus: { id: 1 },
    transporte: { id: 1 },
    conductor: '',
    responsable: '',
    patente: '',
    guia: '',
    comments: ''
  };

  beforeEach(async () => {
    mockInventoryService = jasmine.createSpyObj('InventoryService', ['getAll', 'getById', 'update', 'create']);
    mockAuthService = jasmine.createSpyObj('AuthService', ['logout']);

    await TestBed.configureTestingModule({
      imports: [
        ProcesarResiduosComponent,
        FormsModule,
        RouterModule.forRoot([])
      ],
      providers: [
        { provide: InventoryService, useValue: mockInventoryService },
        { provide: AuthService, useValue: mockAuthService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcesarResiduosComponent);
    component = fixture.componentInstance;
  });

  it('debería cargar los inventarios al iniciar', () => {
    mockInventoryService.getAll.and.returnValue(of([mockInventory]));
    fixture.detectChanges();

    expect(component.inventarios.length).toBe(1);
    expect(component.inventarios[0].id).toBe(1);
  });

  it('debería manejar error al cargar inventarios', () => {
    spyOn(console, 'error');
    mockInventoryService.getAll.and.returnValue(throwError(() => 'Error de carga'));

    component.ngOnInit();

    expect(console.error).toHaveBeenCalledWith('Error cargando inventarios', 'Error de carga');
  });

  it('no debería iniciar procesamiento si faltan campos', () => {
    spyOn(console, 'error');

    component.iniciarProcesamiento();

    expect(console.error).toHaveBeenCalledWith('Faltan campos obligatorios');
  });

  it('debería mostrar alerta si no hay suficiente stock', () => {
    spyOn(window, 'alert');
    mockInventoryService.getById.and.returnValue(of({
      ...mockInventory,
      items: [{ ...mockInventory.items[0], quantity: 0 }]
    }));

    component.selectedInventoryId = 1;
    component.materialProduccion = 'Madera Tratada';
    component.calidad = 'Grado A';

    component.iniciarProcesamiento();

    expect(window.alert).toHaveBeenCalledWith('❌ No hay suficiente stock para procesar');
  });

  it('debería actualizar y crear inventario si todo es válido', fakeAsync(() => {
    mockInventoryService.getById.and.returnValue(of(mockInventory));
    mockInventoryService.update.and.returnValue(of(mockInventory));
    mockInventoryService.create.and.returnValue(of(mockInventory));
    mockInventoryService.getAll.and.returnValue(of([]));

    component.selectedInventoryId = 1;
    component.materialProduccion = 'Madera Tratada';
    component.calidad = 'Grado A';

    component.iniciarProcesamiento();
    tick(1000);

    expect(component.mensaje).toContain('✅ Se produjeron');
    expect(component.unidadesProducidas).toBe(5.74);
    expect(component.valorEstimado).toBe(1440);
    expect(component.estadoSeleccion.proceso).toBe(false);
    expect(component.materialProduccion).toBe('');
  }));
});
