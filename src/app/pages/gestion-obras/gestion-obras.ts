import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { WorkSiteService } from '../gestion-obras/worksite.service';
import { WorkSite } from '../gestion-obras/obra.model';

@Component({
  selector: 'app-gestion-obras',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gestion-obras.html',
  styleUrls: ['./gestion-obras.css']
})
export class GestionObrasComponent implements OnInit {

  obras: WorkSite[] = [];

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
}
