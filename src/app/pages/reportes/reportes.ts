import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule }   from '@angular/router';
import { FormsModule }    from '@angular/forms';
import Chart              from 'chart.js/auto';

interface StatCard {
  label: string;
  value: string;
  sub?: string;
  icon: string;
}

interface MonthlyData {
  month: string;
  generated: number;
  recycled: number;
  treated: number;
}

interface ReportEntry {
  title: string;
  date: string;
  type: string;
  status: 'Completado' | 'En proceso' | 'Fallido';
}

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './reportes.html',
  styleUrls: ['./reportes.css']
})
export class ReportesComponent implements AfterViewInit {

  stats: StatCard[] = [
    { label: 'Total Generado',   value: '1,847 m³',  sub: '+12.3% vs mes anterior', icon: 'bi-box-seam' },
    { label: 'Reciclado',        value: '1,264 m³',  sub: '68.4% del total',         icon: 'bi-arrow-repeat' },
    { label: 'Eficiencia Global',value: '87.2%',     sub: '+4.1% mejora',          icon: 'bi-graph-up' },
    { label: 'Obras Monitoreadas', value: '3',      sub: 'Activas este mes',        icon: 'bi-building' }
  ];

  monthly: MonthlyData[] = [
    { month: 'Ene', generated: 48, recycled: 30, treated: 10 },
    { month: 'Feb', generated: 52, recycled: 35, treated: 12 },
    { month: 'Mar', generated: 50, recycled: 32, treated: 11 },
    { month: 'Abr', generated: 65, recycled: 45, treated: 15 },
    { month: 'May', generated: 58, recycled: 40, treated: 13 },
    { month: 'Jun', generated: 75, recycled: 50, treated: 16 },
  ];

  distribution = [
    { label: 'Escombros', value: 52 },
    { label: 'Madera',    value: 28 },
    { label: 'Metal',     value: 15 },
    { label: 'Cartón',    value: 5 },
  ];

  reports: ReportEntry[] = [
    { title: 'Reporte Mensual de Residuos', date: '2024-06-30', type: 'Mensual',   status: 'Completado' },
    { title: 'Análisis de Eficiencia por Obra', date: '2024-06-28', type: 'Análisis', status: 'Completado' },
    { title: 'Proyección Trimestral', date: '2024-06-25', type: 'Trimestral', status: 'En proceso' },
  ];

  @ViewChild('lineCanvas') lineCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('pieCanvas')  pieCanvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {

    new Chart(this.lineCanvas.nativeElement.getContext('2d')!, {
      type: 'line',
      data: {
        labels: this.monthly.map(m => m.month),
        datasets: [
          {
            label: 'Generado',
            data: this.monthly.map(m => m.generated),
            fill: false,
          },
          {
            label: 'Reciclado',
            data: this.monthly.map(m => m.recycled),
            fill: false,
          },
          {
            label: 'Tratado',
            data: this.monthly.map(m => m.treated),
            fill: false,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom' } }
      }
    });

    new Chart(this.pieCanvas.nativeElement.getContext('2d')!, {
      type: 'pie',
      data: {
        labels: this.distribution.map(d => d.label),
        datasets: [{ data: this.distribution.map(d => d.value) }]
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });
  }
}
