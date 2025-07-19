import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, DashboardComponent] // ¡IMPORTAR en vez de declarar!
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener etiquetas correctas en el gráfico de pastel', () => {
    const labels = component.pieChartData.labels as string[];
    expect(labels).toEqual(['Reciclado', 'Disposición final', 'Reutilizado', 'Otro']);
  });

  it('debería tener datos correctos en el gráfico de pastel', () => {
    const data = component.pieChartData.datasets[0].data;
    expect(data).toEqual([45, 25, 20, 10]);
  });

  it('debería tener etiquetas correctas en el gráfico de barras', () => {
    expect(component.barChartData.labels).toEqual(['Torre Norte', 'Centro Plaza', 'Corporativo']);
  });

  it('debería tener datasets correctos en el gráfico de barras', () => {
    const datasets = component.barChartData.datasets;
    expect(datasets.length).toBe(3);
    expect(datasets[0].label).toBe('Hormigón');
    expect(datasets[1].label).toBe('Madera');
    expect(datasets[2].label).toBe('Metal');
  });

  it('debería limpiar el storage y redirigir al login al hacer logout', () => {
    spyOn(router, 'navigate');

    localStorage.setItem('testItem', 'value');
    sessionStorage.setItem('testItem', 'value');

    component.logout();

    expect(localStorage.getItem('testItem')).toBeNull();
    expect(sessionStorage.getItem('testItem')).toBeNull();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
