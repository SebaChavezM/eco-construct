import { Component } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule, RouterModule ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {

  public pieChartLabels = ['Reciclado', 'Disposición final', 'Reutilizado', 'Otro'];
  public pieChartData: ChartData<'pie', number[], string> = {
    labels: this.pieChartLabels,
    datasets: [{
      data: [45, 25, 20, 10],
      backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444']
    }]
  };

  public pieChartType: 'pie' = 'pie';
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: { boxWidth: 12, padding: 16 }
      }
    }
  };

  public barChartLabels = ['Torre Norte', 'Centro Plaza', 'Corporativo'];
  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      { label: 'Hormigón', data: [45, 30, 28], backgroundColor: '#9ca3af' },
      { label: 'Madera',   data: [12, 18, 14], backgroundColor: '#10b981' },
      { label: 'Metal',    data: [ 9,  5, 11], backgroundColor: '#3b82f6' }
    ]
  };
  public barChartType: 'bar' = 'bar';
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      title:  { display: false }
    },
    scales: {
      x: {},
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Cantidad (m³)' }
      }
    }
  };

  constructor() {}
}
