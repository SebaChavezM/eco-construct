import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { WorkSiteService } from '../worksite.service';
import { CreateWorkSite } from '../obra.model';

@Component({
  selector: 'app-nueva-obra',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './nueva-obra.html',
  styleUrls: ['./nueva-obra.css']
})
export class NuevaObraComponent {
  obra = {
    name: '',
    address: '',
    userId: 1,
    workSiteTypeId: 1,
    workSiteStatusId: 1
  };

  tipos = [
    { id: 1, nombre: 'Terreno' },
    { id: 2, nombre: 'Edificación' },
    { id: 3, nombre: 'Infraestructura' }
  ];

  estados = [
    { id: 1, nombre: 'Activo' },
    { id: 2, nombre: 'Finalizado' }
  ];

  constructor(
    private router: Router,
    private workSiteService: WorkSiteService
  ) {}

  crearObra() {
    const payload: CreateWorkSite = {
      name: this.obra.name,
      address: this.obra.address,
      user: { id: this.obra.userId },
      workSiteType: { id: 1 },
      workSiteStatus: { id: 1 }
    };

    this.workSiteService.create(payload).subscribe({
      next: () => this.router.navigate(['/gestion-obras']),
      error: err => console.error('Error al crear obra:', err)
    });
  }

  cancelar() {
    this.router.navigate(['/gestion-obras']);
  }
}
