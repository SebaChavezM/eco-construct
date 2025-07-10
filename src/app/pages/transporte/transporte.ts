// transporte.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { TransporteService } from './transporte.service';
import { Transporte }        from './transporte.model';

@Component({
  selector: 'app-transporte',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    ReactiveFormsModule,
    RouterModule,
    MatSnackBarModule
  ],
  templateUrl: './transporte.html',
  styleUrls:   ['./transporte.css']
})
export class TransporteComponent implements OnInit {
  residuos       = ['Escombros','Madera','Metal','Vidrio'];
  destinos       = ['Planta EcoMat','Centro Reutilización','Vertedero ABC'];
  transportistas = ['Transporte X','Logística Y','Camiones Z'];

  form: FormGroup;

  // Dummy inicial
  enCurso: Transporte[] = [
    {
      residuo:       'Madera',
      cantidad:      8.2,
      origen:        'Centro Comercial Plaza',
      destino:       'Centro de Reutilización',
      patente:       'DEF-5678',
      fechaSalida:   '2025-07-10T15:00',
      fechaLlegada:  '2025-07-10T16:30',
      transportista: 'Logística Y',
      conductor:     'Luis García',
      guia:          'TRK-0002',
      estadoTexto:   'Cargando'
    }
  ];

  numeroServicio = this.enCurso.length + 1;

  // Para controlar el modal Bootstrap
  showDetalleModal = false;
  selectedTransport?: Transporte;

  constructor(
    private fb:    FormBuilder,
    private svc:   TransporteService,
    private snack: MatSnackBar,
  ) {
    this.form = this.fb.group({
      residuo:       ['', Validators.required],
      transportista: ['', Validators.required],
      obra:          ['', Validators.required],
      conductor:     ['', [Validators.required, Validators.minLength(3)]],
      patente:       ['', [Validators.required, Validators.pattern(/^[A-Z0-9\-]{4,10}$/)]],
      fechaSalida:   ['', Validators.required],
      fechaLlegada:  ['', Validators.required],
      guia:          ['', Validators.required]
    });
  }

  ngOnInit() {
    this.load();
  }

  private load() {
    this.svc.getTransportes().subscribe({
      next: ts => {
        this.enCurso = ts;
        this.numeroServicio = this.enCurso.length + 1;
      },
      error: _ => this.snack.open('Error cargando transportes','Cerrar',{ duration:3000, panelClass:['snack-error'] })
    });
  }

  register() {
    if (this.form.invalid) {
      this.snack.open('Revisa los campos obligatorios','Cerrar',{ duration:3000, panelClass:['snack-error'] });
      this.form.markAllAsTouched();
      return;
    }
    const payload: Transporte = {
      ...this.form.value,
      cantidad:     0,                                 
      origen:       'Torre Residencial Norte',
      destino:      this.form.value.obra,
      estadoTexto:  'En tránsito'
    };
    this.svc.createTransporte(payload).subscribe({
      next: nuevo => {
        this.enCurso.unshift(nuevo);
        this.numeroServicio = this.enCurso.length + 1;
        this.snack.open('Transporte registrado','Cerrar',{ duration:3000, panelClass:['snack-success'] });
        this.form.reset();
      },
      error: _ => this.snack.open('Error al registrar transporte','Cerrar',{ duration:5000, panelClass:['snack-error'] })
    });
  }

  openDetalle(t: Transporte) {
    this.selectedTransport = t;
    this.showDetalleModal     = true;
  }

  closeDetalle() {
    this.showDetalleModal = false;
  }
}
