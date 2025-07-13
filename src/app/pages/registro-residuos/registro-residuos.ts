import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import {
  Carrier,
  Item,
  WorkSite,
  RegistroResiduos,
  Transporte
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
  obras: WorkSite[] = [];
  tipos: Item[] = [];
  responsables: Carrier[] = [];
  transportes: Transporte[] = [];
  servicioSeleccionado: number = 0;

  tipoResiduoSeleccionado = '';
  obraNombreSeleccionada = '';
  responsableNombreSeleccionado = '';
  conductorSeleccionado = '';
  patenteSeleccionada = '';
  guiaSeleccionada = '';
  unidadSeleccionada = '';

  registro: RegistroResiduos = {
    workSiteId: 0,
    inventoryStatusId: 1,
    carrierId: 0,
    comments: '',
    items: [{ item: { id: 0 }, quantity: 0 }],
    photos: [],
    transporteId: 0
  };

  recientes: RegistroResiduos[] = [];

  constructor(
    private svc: RegistroResiduosService,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.svc.getCarriers().subscribe({
      next: cs => this.responsables = cs,
      error: () => this.snack.open('Error cargando responsables', 'Cerrar', { duration: 3000 })
    });
    this.svc.getItems().subscribe({
      next: items => this.tipos = items,
      error: () => this.snack.open('Error cargando tipos de residuo', 'Cerrar', { duration: 3000 })
    });
    this.svc.getWorkSites().subscribe({
      next: ws => this.obras = ws,
      error: () => this.snack.open('Error cargando obras', 'Cerrar', { duration: 3000 })
    });
    this.svc.getTransportes().subscribe({
      next: t => this.transportes = t,
      error: () => this.snack.open('Error cargando servicios de transporte', 'Cerrar', { duration: 3000 })
    });
    this.svc.getRegistros().subscribe({
      next: (registros: RegistroResiduos[]) => {
        this.recientes = registros.slice(-5).reverse();
      },
      error: () => {
        this.snack.open('Error cargando registros', 'Cerrar', { duration: 3000 });
      }
    });
  }

  onTipoYCantidadChange(): void {
    const current = this.registro.items[0];
    this.registro.items = [{
      item: { id: current.item.id },
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
      this.snack.open('Selecciona un responsable', 'Cerrar', { duration: 3000, panelClass: ['snack-error'] });
      return;
    }
    if (!this.registro.workSiteId) {
      this.snack.open('Selecciona la obra', 'Cerrar', { duration: 3000, panelClass: ['snack-error'] });
      return;
    }

    const firstItem = this.registro.items[0];
    if (!firstItem || !firstItem.item.id || !firstItem.quantity) {
      this.snack.open('Selecciona el tipo de residuo y la cantidad', 'Cerrar', { duration: 3000, panelClass: ['snack-error'] });
      return;
    }

    this.svc.createRegistro(
      this.registro,
      this.conductorSeleccionado,
      this.responsableNombreSeleccionado,
      this.patenteSeleccionada,
      this.guiaSeleccionada,
      this.unidadSeleccionada
    ).subscribe({
      next: () => {
        this.snack.open('Residuo registrado', 'Cerrar', { duration: 3000, panelClass: ['snack-success'] });
        this.recientes.unshift({ ...this.registro });
        this.resetFormulario();
      },
      error: () => {
        this.snack.open('Error al registrar residuo', 'Cerrar', { duration: 3000, panelClass: ['snack-error'] });
      }
    });
  }

  onSeleccionServicio(): void {
    const transporte = this.transportes.find(t => t.id === this.servicioSeleccionado);
    if (!transporte) return;

    this.registro.transporteId = transporte.id;

    const itemObj = transporte.items?.[0]?.item;
    const itemId = itemObj?.id || 0;
    const itemName = itemObj?.name || '';
    const quantity = transporte.items?.[0]?.quantity || 0;
    const unit = transporte.items?.[0]?.unit || '';

    const obra = this.obras.find(o => o.name === transporte.destiny);
    const responsable = this.responsables.find(c => c.carrier === transporte.carrier);

    this.tipoResiduoSeleccionado = itemName;
    this.unidadSeleccionada = unit;
    this.obraNombreSeleccionada = obra?.name || '';
    this.responsableNombreSeleccionado = responsable?.carrier || '';
    this.conductorSeleccionado = transporte.driver;
    this.patenteSeleccionada = transporte.patent;
    this.guiaSeleccionada = transporte.trackingNumber;

    this.registro.items = [{
      item: { id: itemId },
      quantity
    }];
    this.registro.carrierId = responsable?.id || 0;
    this.registro.workSiteId = obra?.id || 0;
  }

  resetFormulario(): void {
    this.registro = {
      workSiteId: 0,
      inventoryStatusId: 1,
      carrierId: 0,
      comments: '',
      items: [{ item: { id: 0 }, quantity: 0 }],
      photos: [],
      transporteId: 0
    };
    this.tipoResiduoSeleccionado = '';
    this.obraNombreSeleccionada = '';
    this.responsableNombreSeleccionado = '';
    this.conductorSeleccionado = '';
    this.patenteSeleccionada = '';
    this.guiaSeleccionada = '';
    this.unidadSeleccionada = '';
    this.servicioSeleccionado = 0;
  }

  getNombreObra(id: number): string {
    return this.obras.find(o => o.id === id)?.name || 'Obra Desconocida';
  }

  getTipoNombreFromRegistro(r: RegistroResiduos): string {
    const itemId = r.items && r.items.length > 0 ? r.items[0].item.id : undefined;
    const tipo = this.tipos.find(t => t.id === itemId);
    return tipo?.name ?? 'Tipo desconocido';
  }

  getFechaFormateada(): string {
    const fecha = new Date();
    const opciones: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return fecha.toLocaleDateString('es-CL', opciones);
  }

  getTipoNombre(id: number): string {
    const tipo = this.tipos.find(t => t.id === id);
    return tipo?.name ?? 'Tipo desconocido';
  }

  getObraNombre(id: number): string {
    const obra = this.obras.find(o => o.id === id);
    return obra?.name ?? 'Obra desconocida';
  }

  getResponsableNombre(id: number): string {
    const res = this.responsables.find(c => c.id === id);
    return res?.carrier ?? 'Responsable desconocido';
  }

  obtenerNombreTipo(id: number | undefined): string {
    const tipo = this.tipos.find(t => t.id === id);
    return tipo?.name || 'Tipo desconocido';
  }

  obtenerUnidadPorTipo(id: number | undefined): string {
    const tipo = this.tipos.find(t => t.id === id);
    return tipo?.unit || 'u'; // por defecto, si no lo encuentra
  }

  obtenerNombreObra(id: number | undefined): string {
    const obra = this.obras.find(o => o.id === id);
    return obra?.name || 'Obra desconocida';
  }

  obtenerNombreResponsable(id: number | undefined): string {
    const responsable = this.responsables.find(c => c.id === id);
    return responsable?.carrier || 'Responsable desconocido';
  }

}
