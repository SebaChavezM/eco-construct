import { Component, OnInit } from '@angular/core';
import { MatSnackBar }       from '@angular/material/snack-bar';
import { TransporteService } from './transporte.service';
import { CommonModule }      from '@angular/common';
import { FormsModule }       from '@angular/forms';
import { RouterModule }      from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule }           from '@angular/common/http';
import { BrowserAnimationsModule }    from '@angular/platform-browser/animations';

export interface Transporte {
  residuo:       string;
  obra:          string;
  patente:       string;
  fechaSalida:   string;
  fechaLlegada:  string;
  transportista: string;
  conductor:     string;
  guia:          string;
}

@Component({
  selector: 'app-transporte',
  standalone: true,
  imports: [
    CommonModule,        // NgIf, NgFor
    FormsModule,         // ngModel
    RouterModule,        // routerLink
    MatSnackBarModule    // snackbars
  ],
  templateUrl: './transporte.html',
  styleUrls:   ['./transporte.css']
})
export class TransporteComponent implements OnInit {
  residuos       = ['Escombros','Madera','Metal','Vidrio'];
  destinos       = ['Planta EcoMat','Centro Reutilización','Vertedero ABC'];
  transportistas = ['Transporte X','Logística Y','Camiones Z'];

  nuevo: Transporte = {
    residuo: '', obra: '', patente: '',
    fechaSalida: '', fechaLlegada: '',
    transportista: '', conductor: '', guia: ''
  };
  enCurso: Transporte[] = [];

  constructor(
    private svc:   TransporteService,
    private snack: MatSnackBar
  ) {}

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
    this.svc.createTransporte(this.nuevo).subscribe({
      next: t => {
        this.enCurso.unshift(t);
        this.snack.open('Transporte registrado 🎉','Cerrar',{ duration:3000, panelClass:['snack-success'] });
        this.nuevo = { residuo:'', obra:'', patente:'', fechaSalida:'', fechaLlegada:'', transportista:'', conductor:'', guia:'' };
      },
      error: _ => {
        this.snack.open('Error al registrar transporte','Cerrar',{ duration:5000, panelClass:['snack-error'] });
      }
    });
  }
}
