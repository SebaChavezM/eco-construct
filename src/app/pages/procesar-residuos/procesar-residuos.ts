import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventario/inventory.service';
import { Inventory } from '../inventario/inventory.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../guards/auth.service';

@Component({
  selector: 'app-procesar-residuos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './procesar-residuos.html',
  styleUrls: ['./procesar-residuos.css']
})
export class ProcesarResiduosComponent implements OnInit {
  inventarios: Inventory[] = [];
  selectedInventoryId: number | null = null;

  materialProduccion: string = '';
  calidad: string = '';
  unidadesProducidas: number = 0;
  valorEstimado: number = 0;

  tipos = ['Madera Tratada', 'Cartón Reutilizado'];
  calidades = ['Grado A', 'Grado B'];

  estadoSeleccion = {
    residuo: false,
    material: false,
    calidad: false,
    proceso: false
  };

  mensaje: string = '';

  constructor(private inventoryService: InventoryService, private authService: AuthService) {}

  ngOnInit() {
    this.cargarInventarios();
  }

  cargarInventarios() {
    this.inventoryService.getAll().subscribe({
      next: (data: Inventory[]) => {
        this.inventarios = data;
      },
      error: (err) => console.error('Error cargando inventarios', err)
    });
  }

  iniciarProcesamiento() {
    if (!this.selectedInventoryId || !this.materialProduccion || !this.calidad) {
      console.error('Faltan campos obligatorios');
      return;
    }

    this.inventoryService.getById(this.selectedInventoryId).subscribe({
      next: (residuo: Inventory) => {
        const originalItem = residuo.items[0];
        const nuevaCantidad = originalItem.quantity - 1;

        if (nuevaCantidad < 0) {
          alert('❌ No hay suficiente stock para procesar');
          return;
        }

        this.unidadesProducidas = 5.74;
        this.valorEstimado = 1440;

        const actualizado: Inventory = {
          ...residuo,
          items: [{
            ...originalItem,
            quantity: nuevaCantidad
          }]
        };

        this.inventoryService.update(residuo.id!, actualizado).subscribe({
          next: () => {
            const reciclado: Inventory = {
              workSite: { id: residuo.workSite.id },
              carrier: { id: residuo.carrier.id },
              inventoryStatus: { id: residuo.inventoryStatus.id },
              transporte: { id: 1 },
              conductor: '',
              responsable: '',
              patente: '',
              guia: '',
              items: [
                {
                  item: {
                    id: 999,
                    name: this.materialProduccion
                  },
                  quantity: this.unidadesProducidas,
                  unit: originalItem.unit
                }
              ],
              comments: `Reciclado a partir del inventario #${residuo.id}`
            };

            this.inventoryService.create(reciclado).subscribe({
              next: () => {
                this.estadoSeleccion.proceso = true;

                setTimeout(() => {
                  this.mensaje = `✅ Se produjeron ${this.unidadesProducidas} unidades de ${this.materialProduccion}`;
                  this.estadoSeleccion = { residuo: false, material: false, calidad: false, proceso: false };
                  this.selectedInventoryId = null;
                  this.materialProduccion = '';
                  this.calidad = '';
                  this.cargarInventarios();
                }, 1000); 
              },
              error: (err) => console.error('Error al crear reciclado', err)
            });
          },
          error: (err) => console.error('Error al actualizar residuo', err)
        });
      },
      error: (err) => console.error('Error al obtener residuo', err)
    });
  }

  logout(): void {
    this.authService.logout();
  }

}

