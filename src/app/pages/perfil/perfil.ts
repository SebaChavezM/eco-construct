import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../guards/auth.service';
import { UserProfile } from './user-profile.model';

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
export class PerfilComponent implements OnInit {
  user: UserProfile | null = null;

  stats: Estadistica[] = [
    { label: 'Obras gestionadas', value: 12 },
    { label: 'Registros creados', value: 347 },
    { label: 'Reportes generados', value: 28 },
    { label: 'Días activo', value: 156 }
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

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getUserProfile().subscribe({
      next: (profile) => {
        this.user = {
          ...profile,
          avatarUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
        };
      },
      error: (err) => {
        console.error('Error al cargar perfil:', err);
      }
    });
  }

  logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
