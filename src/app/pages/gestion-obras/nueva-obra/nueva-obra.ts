import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Obra {
  nombre: string;
  ubicacion: string;
  constructora: string;
  encargado: string;
  fechaInicio: string;
  fechaFin: string;
  tipo: string;
  estado: string;
  descripcion: string;
}

@Component({
  selector: 'app-nueva-obra',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './nueva-obra.html',
  styleUrls: ['./nueva-obra.css']
})
export class NuevaObraComponent {

  obra: Obra = {
    nombre: '',
    ubicacion: '',
    constructora: '',
    encargado: '',
    fechaInicio: '',
    fechaFin: '',
    tipo: '',
    estado: '',
    descripcion: ''
  };

  tipos = ['Residencial', 'Comercial', 'Industrial', 'Infraestructura'];
  estados = ['Planificada', 'En progreso', 'Suspendida', 'Finalizada'];

  constructor(private router: Router) {}

  crearObra() {
    console.log('Obra a crear:', this.obra);

    this.router.navigate(['/gestion-obras']);
  }

  cancelar() {
    this.router.navigate(['/gestion-obras']);
  }
}
