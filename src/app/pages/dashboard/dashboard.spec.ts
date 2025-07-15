import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard';
import { Router } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent, CommonModule, NgChartsModule, RouterTestingModule.withRoutes([])],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should define pie chart data correctly', () => {
    expect(component.pieChartData).toBeDefined();
    expect(component.pieChartData.datasets[0].data.length).toBe(4);
  });

  it('should define bar chart data correctly', () => {
    expect(component.barChartData).toBeDefined();
    expect(component.barChartData.datasets.length).toBe(3);
  });

  it('should clear storage and navigate on logout', () => {
    const navigateSpy = spyOn(router, 'navigate');
    localStorage.setItem('test', 'value');
    sessionStorage.setItem('test', 'value');

    component.logout();

    expect(localStorage.getItem('test')).toBeNull();
    expect(sessionStorage.getItem('test')).toBeNull();
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });
});
