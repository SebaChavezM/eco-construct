// transporte.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { TransporteService } from './transporte.service';
import { Transporte }        from './transporte.model';
import { Residuo } from './residuo.model';

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
  enCurso: Transporte[] = [];

  numeroServicio = this.enCurso.length + 1;
  residuos: Residuo[] = [];
  showDetalleModal = false;
  selectedTransport?: Transporte;
  editMode = false;

  constructor(
    private fb:    FormBuilder,
    private svc:   TransporteService,
    private toastr: ToastrService,
    private router: Router
  ) {
  this.form = this.fb.group({
    transportista: ['', Validators.required],
    residuoId: ['', Validators.required],
    cantidad: [0, Validators.required],
    unidad: ['No especifica', Validators.required],
    obra: ['', Validators.required],
    conductor: ['', [Validators.required, Validators.minLength(3)]],
    patente: ['', [Validators.required, Validators.pattern(/^[A-Z0-9\-]{4,10}$/)]],
    fechaSalida: ['', Validators.required],
    fechaLlegada: ['', Validators.required],
    guia: ['', Validators.required]
  });
  }

  ngOnInit() {
    this.load();
    this.loadResiduos();
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

  private loadResiduos() {
    this.svc.getResiduos().subscribe({
      next: data => this.residuos = data,
      error: () => this.toastr.error('Error cargando residuos')
    });
  }

register() {
  if (this.form.invalid) {
    this.toastr.error('Revisa los campos obligatorios', 'Validación');
    this.form.markAllAsTouched();
    return;
  }

  const payload: any = {
    ...this.form.value,
    cantidad: 0,
    origen: 'Bodegas EcoConstruct',
    destino: this.form.value.obra,
    estadoTexto: 'En tránsito',
    items: [
      {
        item: { id: this.form.value.residuoId },
        quantity: 0,
        unit: 'No especifica'
      }
    ]
  };

  delete payload.residuoId;

  console.log('Payload enviado al backend:', payload);

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
  this.selectedTransport = { ...t };
  console.log('Transporte seleccionado:', this.selectedTransport);
  console.log('Items:', this.selectedTransport.items);
  this.editMode = false;
  this.showDetalleModal = true;
}
  onEdit() {
    this.editMode = true;
    this.form.patchValue({
      transportista: this.selectedTransport!.transportista,
      residuo:       this.selectedTransport!.residuo,
      obra:          this.selectedTransport!.destino,
      conductor:     this.selectedTransport!.conductor,
      patente:       this.selectedTransport!.patente,
      fechaSalida:   this.selectedTransport!.fechaSalida,
      fechaLlegada:  this.selectedTransport!.fechaLlegada,
      guia:          this.selectedTransport!.guia
    });
  }

  onSave() {
    if (this.form.invalid || !this.selectedTransport) return;

    if (new Date(this.form.value.fechaLlegada) < new Date(this.form.value.fechaSalida)) {
      this.toastr.error('La fecha de llegada no puede ser anterior a la de salida', 'Validación');
      return;
    }

    const updated: Transporte = {
      ...this.selectedTransport,
      ...this.form.value,
      destino: this.form.value.obra,
      items: [
        {
          item: { id: Number(this.form.value.residuoId) },
          quantity: Number(this.form.value.cantidad),
          unit: this.form.value.unidad
        }
      ]
    };

    this.svc.updateTransporte(updated).subscribe({
      next: t => {
        const i = this.enCurso.findIndex(x => x.id === t.id);
        if (i > -1) this.enCurso[i] = t;
        this.toastr.success('Transporte actualizado','¡Listo!');
        this.closeDetalle();
      },
      error: err => {
        console.error('Error al actualizar transporte:', err);
        this.toastr.error('Error actualizando transporte', 'Error');
      }
    });
  }

  getResiduoNombrePorId(id: number): string {
    const res = this.residuos.find(r => r.id === id);
    return res ? res.name : '(Desconocido)';
  }

  closeDetalle() {
    this.showDetalleModal = false;
    this.editMode = false;
    this.form.reset();
  }

   logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
