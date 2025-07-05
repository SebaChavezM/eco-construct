import { Component, OnInit }             from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule }                  from '@angular/common';
import { ReactiveFormsModule }           from '@angular/forms';
import { RouterModule }                  from '@angular/router';
import { MatSnackBar, MatSnackBarModule }from '@angular/material/snack-bar';
import { TransporteService }             from './transporte.service';

@Component({
  selector: 'app-transporte',
  standalone: true,
  imports: [
    CommonModule,
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
  enCurso: any[] = [];

  constructor(
    private fb:    FormBuilder,
    private svc:   TransporteService,
    private snack: MatSnackBar
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
      next: ts => this.enCurso = ts,
      error: _ => this.snack.open('Error cargando transportes','Cerrar',{ duration:3000, panelClass:['snack-error'] })
    });
  }

  register() {
    if (this.form.invalid) {
      this.snack.open('Revisa los campos obligatorios','Cerrar',{ duration:3000, panelClass:['snack-error'] });
      this.form.markAllAsTouched();
      return;
    }
    const payload = this.form.value;
    this.svc.createTransporte(payload).subscribe({
      next: nuevo => {
        this.enCurso.unshift(nuevo);
        this.snack.open('Transporte registrado','Cerrar',{ duration:3000, panelClass:['snack-success'] });
        this.form.reset();
      },
      error: _ => this.snack.open('Error al registrar transporte','Cerrar',{ duration:5000, panelClass:['snack-error'] })
    });
  }
}
