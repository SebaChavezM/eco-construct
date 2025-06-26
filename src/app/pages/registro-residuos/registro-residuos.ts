import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';

interface RegistroResiduos {
  tipo: string;
  obra: string;
  cantidad: number;
  unidad: string;
  responsable: string;
  fechaHora: string;
  ubicacion: string;
  observaciones: string;
  fotos: File[];
}

@Component({
  selector: 'app-registro-residuos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './registro-residuos.html',
  styleUrls: ['./registro-residuos.css']
})
export class RegistroResiduosComponent {

  tipos = ['Escombros', 'Madera', 'Metal', 'Vidrio'];
  obras = ['Torre Norte', 'Edificio Central', 'Ampliación Patio'];
  unidades = ['m³', 'kg', 'Unidad'];

  registro: RegistroResiduos = {
    tipo: '',
    obra: '',
    cantidad: 0,
    unidad: this.unidades[0],
    responsable: '',
    fechaHora: '',
    ubicacion: '',
    observaciones: '',
    fotos: []
  };

  recientes: RegistroResiduos[] = [
    {
      tipo: 'Escombros',
      obra: 'Torre Norte',
      cantidad: 15.5,
      unidad: 'm³',
      responsable: 'Juan Pérez',
      fechaHora: '2024-01-20 14:30',
      ubicacion: 'Planta baja',
      observaciones: '',
      fotos: []
    },
  ];

  onFileChange(evt: Event) {
    const input = evt.target as HTMLInputElement;
    if (!input.files) return;
    this.registro.fotos = Array.from(input.files);
  }

  submit() {
    console.log('Registrando', this.registro);
  }
}
