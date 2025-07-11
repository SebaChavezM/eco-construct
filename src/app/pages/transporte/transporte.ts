// transporte.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  ],
  templateUrl: './transporte.html',
  styleUrls: ['./transporte.css']
})
export class TransporteComponent implements OnInit {
  form: FormGroup;

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

  showDetalleModal = false;
  selectedTransport?: Transporte;

  constructor(
    private fb:    FormBuilder,
    private svc:   TransporteService,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      transportista: ['', Validators.required],
      residuo:       ['', Validators.required],
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
      next: transports => {
        this.enCurso = transports;
        this.numeroServicio = this.enCurso.length + 1;
      },
      error: () => {
        this.toastr.error('Error cargando transportes', 'Error');
      }
    });
  }

  register() {
    if (this.form.invalid) {
      this.toastr.error('Revisa los campos obligatorios', 'Validación');
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
        this.toastr.success('Transporte registrado', '¡Listo!');
        this.form.reset();
      },
      error: () => {
        this.toastr.error('Error al registrar transporte', 'Error');
      }
    });
  }

  openDetalle(t: Transporte) {
    this.selectedTransport = t;
    this.showDetalleModal = true;
  }

  closeDetalle() {
    this.showDetalleModal = false;
  }
}
