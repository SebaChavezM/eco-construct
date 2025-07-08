import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { FormsModule }       from '@angular/forms';
import { RouterModule }      from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import {
  Carrier,
  Item,
  WorkSite,
  RegistroResiduos
} from './registro-residuos.model';
import { RegistroResiduosService } from './registro-residuos.service';

@Component({
  selector: 'app-registro-residuos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatSnackBarModule
  ],
  templateUrl: './registro-residuos.html',
  styleUrls: ['./registro-residuos.css']
})
export class RegistroResiduosComponent implements OnInit {
  obras: WorkSite[]       = [];
  tipos: Item[]           = [];
  responsables: Carrier[] = [];

  registro: RegistroResiduos = {
    workSiteId:        0,
    inventoryStatusId: 1,
    carrierId:         0,
    comments:          '',
    items:             [{ item: { id: 0 }, quantity: 0 }],
    photos:            []
  };

  recientes: RegistroResiduos[] = [];

  constructor(
    private svc:   RegistroResiduosService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.svc.getCarriers().subscribe({
      next: cs => this.responsables = cs,
      error: () => this.snack.open('Error cargando responsables','Cerrar',{ duration:3000 })
    });
    this.svc.getItems().subscribe({
      next: items => this.tipos = items,
      error: () => this.snack.open('Error cargando tipos de residuo','Cerrar',{ duration:3000 })
    });
    this.svc.getWorkSites().subscribe({
      next: ws => this.obras = ws,
      error: () => this.snack.open('Error cargando obras','Cerrar',{ duration:3000 })
    });
  }

  onTipoYCantidadChange(): void {
    const current = this.registro.items[0];
    this.registro.items = [{
      item:     { id: current.item.id },
      quantity: current.quantity
    }];
  }

  onFileChange(evt: Event): void {
    const input = evt.target as HTMLInputElement;
    if (!input.files) return;
    this.registro.photos = Array.from(input.files);
  }

  submit(): void {
    if (!this.registro.carrierId) {
      this.snack.open('Selecciona un responsable','Cerrar',{ duration:3000, panelClass:['snack-error'] });
      return;
    }
    if (!this.registro.workSiteId) {
      this.snack.open('Selecciona la obra','Cerrar',{ duration:3000, panelClass:['snack-error'] });
      return;
    }
    const firstItem = this.registro.items[0];
    if (!firstItem || !firstItem.item.id || !firstItem.quantity) {
      this.snack.open('Selecciona el tipo de residuo y la cantidad','Cerrar',{ duration:3000, panelClass:['snack-error'] });
      return;
    }

    this.svc.createRegistro(this.registro).subscribe({
      next: () => {
        this.snack.open('Residuo registrado','Cerrar',{ duration:3000, panelClass:['snack-success'] });
        this.recientes.unshift({ ...this.registro });
        this.registro = {
          workSiteId:        0,
          inventoryStatusId: 1,
          carrierId:         0,
          comments:          '',
          items:             [{ item: { id: 0 }, quantity: 0 }],
          photos:            []
        };
      },
      error: () => {
        this.snack.open('Error al registrar residuo','Cerrar',{ duration:3000, panelClass:['snack-error'] });
      }
    });
  }
}
