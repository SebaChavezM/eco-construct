import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Obra {
  id: number;
  titulo: string;
  ubicacion: string;
  constructora: string;
  fechaInicio: string;
  fechaFin: string;
  encargado: string;
  progreso: number; // % de progreso
  totalResiduos: number; // en m³
  estado: 'En progreso' | 'Finalizando';
}

@Component({
  selector: 'app-gestion-obras',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gestion-obras.html',
  styleUrls: ['./gestion-obras.css']
})
export class GestionObrasComponent {
  obras: Obra[] = [
    {
      id: 1,
      titulo: 'Torre Residencial Norte',
      ubicacion: 'Las Condes, Santiago',
      constructora: 'Constructora ABC',
      fechaInicio: '2024-01-15',
      fechaFin: '2024-12-30',
      encargado: 'Juan Pérez',
      progreso: 78,
      totalResiduos: 245,
      estado: 'En progreso'
    },
    {
      id: 2,
      titulo: 'Centro Comercial Plaza',
      ubicacion: 'Providencia, Santiago',
      constructora: 'Ingeniería XYZ',
      fechaInicio: '2024-02-01',
      fechaFin: '2025-01-15',
      encargado: 'María García',
      progreso: 45,
      totalResiduos: 158,
      estado: 'En progreso'
    },
    {
      id: 3,
      titulo: 'Edificio Corporativo',
      ubicacion: 'Vitacura, Santiago',
      constructora: 'Construcciones DEF',
      fechaInicio: '2023-10-01',
      fechaFin: '2024-03-30',
      encargado: 'Carlos López',
      progreso: 92,
      totalResiduos: 89,
      estado: 'Finalizando'
    }
  ];
}
