import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { GestionObrasComponent } from './gestion-obras';
import { RouterTestingModule } from '@angular/router/testing';
import { WorkSiteService } from '../gestion-obras/worksite.service';
import { of, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { WorkSite } from '../gestion-obras/obra.model';

describe('GestionObrasComponent', () => {
  let component: GestionObrasComponent;
  let fixture: ComponentFixture<GestionObrasComponent>;
  let workSiteServiceSpy: jasmine.SpyObj<WorkSiteService>;

    const mockObras: WorkSite[] = [
    {
        id: 1,
        name: 'Obra Central',
        address: 'Calle Falsa 123',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-10T00:00:00Z',
        workSiteStatus: { id: 1, name: 'Activo' },
        workSiteType: { id: 1, name: 'Edificación' },
        user: {
        id: 5,
        name: 'María Pérez',
        company: 'Eco S.A.',
        biography: 'Responsable ambiental de zona centro'
        }
    }
    ];

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('WorkSiteService', ['getAll', 'update']);

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, GestionObrasComponent, FormsModule],
      providers: [{ provide: WorkSiteService, useValue: spy }]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionObrasComponent);
    component = fixture.componentInstance;
    workSiteServiceSpy = TestBed.inject(WorkSiteService) as jasmine.SpyObj<WorkSiteService>;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar las obras en ngOnInit', () => {
    workSiteServiceSpy.getAll.and.returnValue(of(mockObras));
    component.ngOnInit();
    expect(component.obras.length).toBe(1);
    expect(component.obras[0].name).toBe('Obra Central');
  });

  it('debería mostrar error si getAll falla', () => {
    const consoleSpy = spyOn(console, 'error');
    workSiteServiceSpy.getAll.and.returnValue(throwError(() => 'error'));
    component.ngOnInit();
    expect(consoleSpy).toHaveBeenCalledWith('Error al cargar obras:', 'error');
  });

    it('debería abrir el modal con obra seleccionada', () => {
    const obra = mockObras[0];
    component.abrirModal(obra);
    expect(component.modalVisible).toBeTrue();
    expect(component.obraSeleccionada?.name).toBe('Obra Central');
    expect(component.biografiaTemporal).toBe('Responsable ambiental de zona centro');
    });

  it('debería cerrar el modal y limpiar obra seleccionada', fakeAsync(() => {
    component.modalVisible = true;
    component.obraSeleccionada = mockObras[0];
    component.cerrarModal();
    expect(component.modalVisible).toBeFalse();
    tick(300);
    expect(component.obraSeleccionada).toBeUndefined();
  }));

  it('debería guardar cambios y recargar obras', () => {
    const obra = JSON.parse(JSON.stringify(mockObras[0]));
    obra.user.biography = 'Actualizada';

    component.obraSeleccionada = obra;
    component.biografiaTemporal = 'Actualizada';

    workSiteServiceSpy.update.and.returnValue(of(mockObras[0]));
    workSiteServiceSpy.getAll.and.returnValue(of(mockObras));

    const loadSpy = spyOn(component, 'loadObras').and.callThrough();

    component.guardarCambios();

    expect(workSiteServiceSpy.update).toHaveBeenCalledWith(1, obra);
    expect(loadSpy).toHaveBeenCalled();
  });

    it('debería mostrar error si update falla', () => {
    const consoleSpy = spyOn(console, 'error');

    const obraCopia = JSON.parse(JSON.stringify(mockObras[0]));
    component.obraSeleccionada = obraCopia;
    component.biografiaTemporal = 'x';

    workSiteServiceSpy.update.and.returnValue(throwError(() => 'error'));
    component.guardarCambios();

    expect(consoleSpy).toHaveBeenCalledWith('Error al actualizar obra', 'error');
    });

  it('debería limpiar storage y redirigir al login al hacer logout', () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    component['router'] = routerSpy as any;

    localStorage.setItem('test', '1');
    sessionStorage.setItem('test', '1');

    component.logout();

    expect(localStorage.getItem('test')).toBeNull();
    expect(sessionStorage.getItem('test')).toBeNull();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });
});
