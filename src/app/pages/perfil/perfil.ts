import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Usuario {
  avatarUrl: string;
  role: string;
  fullName: string;
  email: string;
  phone: string;
  position: string;
  company: string;
  location: string;
  bio: string;
}

interface Estadistica {
  label: string;
  value: number;
}

interface Actividad {
  title: string;
  description: string;
  date: string;
}

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class PerfilComponent {
  user: Usuario = {
    avatarUrl: 'https://via.placeholder.com/120',
    role: 'Administrador',
    fullName: 'Juan Carlos Administrador',
    email: 'admin@ecoconstruct.com',
    phone: '+56 9 1234 5678',
    position: 'Supervisor de Gestión Ambiental',
    company: 'EcoConstruct Chile',
    location: 'Santiago, Chile',
    bio: 'Especialista en gestión ambiental con más de 5 años de experiencia en el sector construcción. Enfocado en la implementación de prácticas sostenibles y reducción del impacto ambiental.'
  };

  stats: Estadistica[] = [
    { label: 'Obras gestionadas', value: 12 },
    { label: 'Registros creados',   value: 347 },
    { label: 'Reportes generados',   value: 28 },
    { label: 'Días activo',         value: 156 }
  ];

  activities: Actividad[] = [
    {
      title: 'Registro de residuos',
      description: 'Registró 15 m³ de escombros en Torre Norte',
      date: '2024-06-15 14:30'
    },
    {
      title: 'Reporte generado',
      description: 'Generó reporte mensual de eficiencia',
      date: '2024-06-14 09:15'
    },
    {
      title: 'Nueva obra creada',
      description: 'Registró "Edificio Corporativo" en el sistema',
      date: '2024-06-13 16:45'
    }
  ];
}
