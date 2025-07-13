import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inventario.html',
  styleUrls: ['./inventario.css']
})
export class InventarioComponent implements OnInit {
  inventarioOriginal: any[] = [];
  inventarioAgrupado: { nombre: string, cantidad: number, unidad: string }[] = [];

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryService.getAll().subscribe((data) => {
      this.inventarioOriginal = data;
      this.inventarioAgrupado = this.agruparInventario(data);
    });
  }

  agruparInventario(data: any[]): { nombre: string; cantidad: number; unidad: string }[] {
    const agrupado: { [nombre: string]: { cantidad: number, unidad: string } } = {};

    for (const registro of data) {
      for (const item of registro.items || []) {
        const nombre = item.item.name;
        const cantidad = item.quantity;
        const unidad = item.unit;

        if (!agrupado[nombre]) {
          agrupado[nombre] = { cantidad: 0, unidad };
        }

        agrupado[nombre].cantidad += cantidad;
      }
    }

    return Object.entries(agrupado).map(([nombre, datos]) => ({
      nombre,
      cantidad: datos.cantidad,
      unidad: datos.unidad
    }));
  }

  getFecha(fecha: string): string {
    const date = new Date(fecha);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  getEstadoClass(estado: string): string {
    switch (estado.toLowerCase()) {
      case 'procesado':
        return 'estado estado-procesado';
      case 'en stock':
        return 'estado estado-stock';
      case 'vendido':
        return 'estado estado-vendido';
      default:
        return 'estado';
    }
  }

  getValorEstimado(valor: number): string {
    return `$${valor.toLocaleString('en-US')}`;
  }
}
