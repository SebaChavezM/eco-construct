import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { WorkSiteService } from '../gestion-obras/worksite.service';
import { WorkSite } from '../gestion-obras/obra.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion-obras',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './gestion-obras.html',
  styleUrls: ['./gestion-obras.css']
})
export class GestionObrasComponent implements OnInit {

  obras: WorkSite[] = [];
  obraSeleccionada?: WorkSite;
  modalVisible = false;
  biografiaTemporal: string = '';

  constructor(
    private router: Router,
    private workSiteService: WorkSiteService
  ) {}

  ngOnInit(): void {
    this.loadObras();
  }

  loadObras(): void {
    this.workSiteService.getAll().subscribe({
      next: (data) => this.obras = data,
      error: (err) => console.error('Error al cargar obras:', err)
    });
  }

  logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  abrirModal(obra: WorkSite): void {
    this.obraSeleccionada = { ...obra };
    this.biografiaTemporal = obra.user?.biography ?? '';
    this.modalVisible = true;
  }

  cerrarModal() {
    this.modalVisible = false;
    setTimeout(() => {
      this.obraSeleccionada = undefined;
    }, 300);
  }

  guardarCambios(): void {
    if (!this.obraSeleccionada) return;

    this.obraSeleccionada.user.biography = this.biografiaTemporal;

    this.workSiteService.update(this.obraSeleccionada.id, this.obraSeleccionada).subscribe({
      next: () => {
        this.cerrarModal();
        this.loadObras();
      },
      error: (err) => console.error('Error al actualizar obra', err)
    });
  }

}
