import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventarioComponent } from './inventario';
import { RouterTestingModule } from '@angular/router/testing';
import { InventoryService } from './inventory.service';
import { of } from 'rxjs';
import { Inventory } from './inventory.model';

describe('InventarioComponent', () => {
  let component: InventarioComponent;
  let fixture: ComponentFixture<InventarioComponent>;
  let inventoryServiceSpy: jasmine.SpyObj<InventoryService>;

    const mockInventario: Inventory[] = [
    {
        workSite: { id: 1, name: 'Obra A' },
        carrier: { id: 1, carrier: 'Transporte X' },
        inventoryStatus: { id: 1, name: 'Procesado' },
        items: [
        { item: { id: 1, name: 'Concreto' }, quantity: 10, unit: 'm³' },
        { item: { id: 1, name: 'Concreto' }, quantity: 5, unit: 'm³' },
        { item: { id: 2, name: 'Madera' }, quantity: 8, unit: 'm³' }
        ],
        createdAt: '2024-01-01',
        updatedAt: '2024-01-02'
    },
    {
        workSite: { id: 2, name: 'Obra B' },
        carrier: { id: 2, carrier: 'Transporte Y' },
        inventoryStatus: { id: 2, name: 'En Stock' },
        items: [
        { item: { id: 3, name: 'Madera' }, quantity: 4, unit: 'm³' },
        { item: { id: 4, name: 'Acero' }, quantity: 6, unit: 'Ton' }
        ],
        createdAt: '2024-01-03',
        updatedAt: '2024-01-04'
    }
    ];

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('InventoryService', ['getAll']);

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, InventarioComponent],
      providers: [{ provide: InventoryService, useValue: spy }]
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioComponent);
    component = fixture.componentInstance;
    inventoryServiceSpy = TestBed.inject(InventoryService) as jasmine.SpyObj<InventoryService>;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar inventario y agruparlo en ngOnInit', () => {
    inventoryServiceSpy.getAll.and.returnValue(of(mockInventario));
    component.ngOnInit();

    expect(component.inventarioOriginal.length).toBe(2);
    expect(component.inventarioAgrupado.length).toBe(3);

    const concreto = component.inventarioAgrupado.find(i => i.nombre === 'Concreto');
    expect(concreto?.cantidad).toBe(15);
    expect(concreto?.unidad).toBe('m³');
  });

  it('debería formatear la fecha correctamente con getFecha()', () => {
    const dateStr = '2024-06-20T00:00:00Z';
    const formatted = component.getFecha(dateStr);
    expect(formatted).toBe('20/6/2024');
  });

  it('debería retornar clases de estado correctas con getEstadoClass()', () => {
    expect(component.getEstadoClass('procesado')).toBe('estado estado-procesado');
    expect(component.getEstadoClass('en stock')).toBe('estado estado-stock');
    expect(component.getEstadoClass('vendido')).toBe('estado estado-vendido');
    expect(component.getEstadoClass('otro')).toBe('estado');
  });

  it('debería formatear el valor estimado correctamente con getValorEstimado()', () => {
    const valor = component.getValorEstimado(1800);
    expect(valor).toBe('$1,800');
  });

  it('debería limpiar storage y redirigir al login al hacer logout', () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    component['router'] = routerSpy as any;

    localStorage.setItem('prueba', '1');
    sessionStorage.setItem('prueba', '1');

    component.logout();

    expect(localStorage.getItem('prueba')).toBeNull();
    expect(sessionStorage.getItem('prueba')).toBeNull();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });
});
