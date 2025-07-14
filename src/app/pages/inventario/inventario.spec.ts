import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { InventarioComponent } from './inventario';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { InventoryService } from './inventory.service';

describe('InventarioComponent', () => {
  let component: InventarioComponent;
  let fixture: ComponentFixture<InventarioComponent>;
  let mockInventoryService: jasmine.SpyObj<InventoryService>;
  let mockRouter: jasmine.SpyObj<Router>;

  const mockData = [
    {
      id: 1,
      workSite: { id: 1, name: 'Obra 1' },
      carrier: { id: 1, name: 'Transportista 1' },
      inventoryStatus: { id: 1, name: 'Procesado' },
      createdAt: '2024-07-01T00:00:00Z',
      items: [
        { item: { id: 1, name: 'Ladrillos' }, quantity: 100, unit: 'unidades' },
        { item: { id: 2, name: 'Cemento' }, quantity: 50, unit: 'kg' },
        { item: { id: 1, name: 'Ladrillos' }, quantity: 25, unit: 'unidades' }
      ]
    },
    {
      id: 2,
      workSite: { id: 2, name: 'Obra 2' },
      carrier: { id: 2, name: 'Transportista 2' },
      inventoryStatus: { id: 2, name: 'En stock' },
      createdAt: '2024-07-02T00:00:00Z',
      items: [
        { item: { id: 3, name: 'Arena' }, quantity: 70, unit: 'kg' }
      ]
    }
  ];

  beforeEach(async () => {
    mockInventoryService = jasmine.createSpyObj('InventoryService', ['getAll']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [InventarioComponent],
      providers: [
        { provide: InventoryService, useValue: mockInventoryService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(InventarioComponent);
    component = fixture.componentInstance;
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar y agrupar inventario al inicializar', fakeAsync(() => {
    mockInventoryService.getAll.and.returnValue(of(mockData));
    fixture.detectChanges();
    tick();

    expect(component.inventarioOriginal.length).toBe(2);
    expect(component.inventarioAgrupado.length).toBe(3);

    const ladrillos = component.inventarioAgrupado.find(i => i.nombre === 'Ladrillos');
    expect(ladrillos?.cantidad).toBe(125);
    expect(ladrillos?.unidad).toBe('unidades');
  }));

  it('debería formatear correctamente la fecha', () => {
    const formatted = component.getFecha('2024-07-01T00:00:00Z');
    expect(formatted).toBe('1/7/2024');
  });

  it('debería devolver clases CSS según estado', () => {
    expect(component.getEstadoClass('Procesado')).toBe('estado estado-procesado');
    expect(component.getEstadoClass('En Stock')).toBe('estado estado-stock');
    expect(component.getEstadoClass('Vendido')).toBe('estado estado-vendido');
    expect(component.getEstadoClass('Otro')).toBe('estado');
  });

  it('debería formatear valor estimado correctamente', () => {
    const valor = component.getValorEstimado(123456);
    expect(valor).toBe('$123,456');
  });

  it('logout debería limpiar storage y navegar a login', () => {
    spyOn(localStorage, 'clear');
    spyOn(sessionStorage, 'clear');

    component.logout();

    expect(localStorage.clear).toHaveBeenCalled();
    expect(sessionStorage.clear).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
  });
});
