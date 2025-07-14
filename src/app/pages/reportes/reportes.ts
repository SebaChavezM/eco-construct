import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReportesService } from './reportes.service';
import type { ChartConfiguration, ChartTypeRegistry } from 'chart.js';
import Chart from 'chart.js/auto';

interface StatCard {
  label: string;
  value: string;
  sub?: string;
  icon: string;
}

interface MonthlyData {
  mes: string;
  generado: number;
  reciclado: number;
  tratado: number;
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
export class ReportesComponent implements OnInit, AfterViewInit {

  stats: StatCard[] = [];
  monthly: MonthlyData[] = [];
  reports: ReportEntry[] = [];
  distribution: { label: string; value: number }[] = [];

  @ViewChild('lineCanvas') lineCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('pieCanvas') pieCanvas!: ElementRef<HTMLCanvasElement>;

  private lineChart?: Chart;
  private pieChart?: Chart;

  constructor(
    private router: Router,
    private reportesService: ReportesService
  ) {}

  ngOnInit(): void {
    this.reportesService.getResumenStats().subscribe(stats => {
      this.stats = [
        {
          label: 'Total Generado',
          value: `${stats.totalGenerado} m³`,
          sub: '',
          icon: 'bi-box-seam'
        },
        {
          label: 'Reciclado',
          value: `${stats.reciclado} m³`,
          sub: stats.totalGenerado > 0
            ? `${((stats.reciclado / stats.totalGenerado) * 100).toFixed(1)}% del total`
            : '0% del total',
          icon: 'bi-arrow-repeat'
        },
        {
          label: 'Eficiencia Global',
          value: `${stats.eficienciaGlobal}%`,
          sub: '',
          icon: 'bi-graph-up'
        },
        {
          label: 'Obras Monitoreadas',
          value: `${stats.obrasActivas}`,
          sub: 'Activas este mes',
          icon: 'bi-building'
        }
      ];
    });

    this.reportesService.getDistribucionTipos().subscribe(data => {
      this.distribution = data.map(d => ({ label: d.tipo, value: d.cantidad }));
      this.renderPieChart();
    });

    this.reportesService.getDatosMensuales().subscribe(data => {
      this.monthly = data;
      this.renderLineChart();
    });
  }

  ngAfterViewInit(): void {
    this.renderLineChart();
    this.renderPieChart();
  }

  renderLineChart() {
    if (!this.lineCanvas?.nativeElement) return;

    const ctx = this.lineCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    if (this.lineChart) {
      this.lineChart.destroy();
    }

    this.lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.monthly.map(m => m.mes),
        datasets: [
          {
            label: 'Generado',
            data: this.monthly.map(m => m.generado),
            fill: false,
            borderColor: '#4CAF50'
          },
          {
            label: 'Reciclado',
            data: this.monthly.map(m => m.reciclado),
            fill: false,
            borderColor: '#2196F3'
          },
          {
            label: 'Tratado',
            data: this.monthly.map(m => m.tratado),
            fill: false,
            borderColor: '#FFC107'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }

renderPieChart(): void {
  if (!this.pieCanvas?.nativeElement) return;

  const ctx = this.pieCanvas.nativeElement.getContext('2d');
  if (!ctx) return;

  if (this.pieChart) {
    this.pieChart.destroy();
  }

  const config: ChartConfiguration<'pie', number[], string> = {
    type: 'pie',
    data: {
      labels: this.distribution.map(d => d.label),
      datasets: [
        {
          data: this.distribution.map(d => d.value),
          backgroundColor: ['#4CAF50', '#2196F3', '#FFC107', '#FF5722']
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  };

  this.pieChart = new Chart<'pie', number[], string>(ctx, config);
}

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
