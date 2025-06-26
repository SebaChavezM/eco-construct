import { Component } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';

export interface Transporte {
  residuo: string;
  obra: string;
  patente: string;
  fechaSalida: string;
  fechaLlegada: string;
  transportista: string;
  conductor: string;
  guia: string;
}

@Component({
  selector: 'app-transporte',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './transporte.html',
  styleUrls: ['./transporte.css']
})
export class TransporteComponent {

  residuos      = ['Escombros', 'Madera', 'Metal', 'Vidrio'];
  destinos      = ['Planta EcoMat', 'Centro Reutilización', 'Vertedero ABC'];
  transportistas = ['Transporte X', 'Logística Y', 'Camiones Z'];

  nuevo: Transporte = {
    residuo: '',
    obra: '',
    patente: '',
    fechaSalida: '',
    fechaLlegada: '',
    transportista: '',
    conductor: '',
    guia: ''
  };

  enCurso: Transporte[] = [
    {
      residuo: 'Escombros',
      obra: 'Torre Residencial Norte',
      patente: 'ABC-1234',
      fechaSalida: '2024-01-20T14:30',
      fechaLlegada: '2024-01-20T16:00',
      transportista: 'Transporte X',
      conductor: 'Carlos Mendoza',
      guia: 'G-001'
    },
    {
      residuo: 'Madera',
      obra: 'Centro Comercial Plaza',
      patente: 'DEF-5678',
      fechaSalida: '2024-01-20T15:00',
      fechaLlegada: '2024-01-20T16:30',
      transportista: 'Logística Y',
      conductor: 'Luis García',
      guia: 'G-002'
    }
  ];

  register() {
    console.log('Registrando transporte', this.nuevo);
  }
}
