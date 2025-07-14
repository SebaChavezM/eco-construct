import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaObraComponent } from './nueva-obra';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

describe('NuevaObraComponent', () => {
  let component: NuevaObraComponent;
  let fixture: ComponentFixture<NuevaObraComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [NuevaObraComponent, FormsModule, CommonModule, RouterModule],
      providers: [
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevaObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar la obra con campos vacíos', () => {
    expect(component.obra.nombre).toBe('');
    expect(component.obra.descripcion).toBe('');
    expect(component.obra.fechaInicio).toBe('');
  });

  it('crearObra debería redirigir a /gestion-obras', () => {
    component.crearObra();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/gestion-obras']);
  });

  it('cancelar debería redirigir a /gestion-obras', () => {
    component.cancelar();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/gestion-obras']);
  });

  it('debería contener 4 tipos de obra', () => {
    expect(component.tipos.length).toBe(4);
    expect(component.tipos).toContain('Residencial');
  });

  it('debería contener 4 estados de obra', () => {
    expect(component.estados.length).toBe(4);
    expect(component.estados).toContain('Finalizada');
  });
});
