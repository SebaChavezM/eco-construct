import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaObraComponent } from './nueva-obra';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { WorkSiteService } from '../worksite.service';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';

describe('NuevaObraComponent', () => {
  let component: NuevaObraComponent;
  let fixture: ComponentFixture<NuevaObraComponent>;
  let workSiteServiceSpy: jasmine.SpyObj<WorkSiteService>;
  let router: Router;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('WorkSiteService', ['create']);

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, NuevaObraComponent],
      providers: [{ provide: WorkSiteService, useValue: spy }]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevaObraComponent);
    component = fixture.componentInstance;
    workSiteServiceSpy = TestBed.inject(WorkSiteService) as jasmine.SpyObj<WorkSiteService>;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar al servicio y redirigir al crear una obra', () => {
    const navigateSpy = spyOn(router, 'navigate');
    workSiteServiceSpy.create.and.returnValue(of({
    id: 99,
    name: 'Obra Test',
    address: 'Calle Test',
    createdAt: '2025-07-18T00:00:00Z',
    updatedAt: '2025-07-18T00:00:00Z',
    user: { id: 1, name: 'Usuario', company: 'Eco', biography: 'Bio' },
    workSiteType: { id: 1, name: 'Tipo' },
    workSiteStatus: { id: 1, name: 'Estado' }
    }));

    component.obra = {
      name: 'Obra Test',
      address: 'Calle Test',
      userId: 1,
      workSiteTypeId: 1,
      workSiteStatusId: 1
    };

    component.crearObra();

    expect(workSiteServiceSpy.create).toHaveBeenCalledWith({
      name: 'Obra Test',
      address: 'Calle Test',
      user: { id: 1 },
      workSiteType: { id: 1 },
      workSiteStatus: { id: 1 }
    });

    expect(navigateSpy).toHaveBeenCalledWith(['/gestion-obras']);
  });

  it('debería mostrar error si falla la creación', () => {
    const consoleSpy = spyOn(console, 'error');
    workSiteServiceSpy.create.and.returnValue(throwError(() => 'Error de backend'));

    component.crearObra();

    expect(consoleSpy).toHaveBeenCalledWith('Error al crear obra:', 'Error de backend');
  });

  it('debería redirigir al cancelar', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.cancelar();
    expect(navigateSpy).toHaveBeenCalledWith(['/gestion-obras']);
  });
});
