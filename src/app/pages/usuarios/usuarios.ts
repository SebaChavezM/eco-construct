import { Component }   from '@angular/core';
import { CommonModule }from '@angular/common';
import { RouterModule }from '@angular/router';
import { FormsModule } from '@angular/forms';

interface User {
  fullName:  string;
  email:     string;
  role:      'Administrador' | 'Supervisor' | 'Operador';
  state:     'Activo' | 'Inactivo';
  projects:  number;
  lastAccess:string;
}

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl:   './usuarios.html',
  styleUrls:     ['./usuarios.css']
})
export class UsuariosComponent {

  currentUser = {
    fullName: 'Administrador',
    email:    'admin@ecoconstruct.com'
  };

  users: User[] = [
    { fullName: 'Juan Pérez',   email: 'juan.perez@ecoconstruct.com', role: 'Administrador', projects: 5, lastAccess: '2024-01-20', state: 'Activo' },
    { fullName: 'María García', email: 'maria.garcia@ecoconstruct.com', role: 'Supervisor',    projects: 3, lastAccess: '2024-01-22', state: 'Activo' },
    { fullName: 'Carlos López', email: 'carlos.lopez@ecoconstruct.com', role: 'Operador',      projects: 2, lastAccess: '2024-01-18', state: 'Inactivo' },
    { fullName: 'Ana Martín',   email: 'ana.martin@ecoconstruct.com',   role: 'Operador',      projects: 1, lastAccess: '2024-01-22', state: 'Activo' }
  ];

  stats = [
    { label: 'Total Usuarios',  value: this.users.length,                                           icon: 'bi-people' },
    { label: 'Administradores', value: this.users.filter(u => u.role==='Administrador').length,   icon: 'bi-shield-lock' },
    { label: 'Supervisores',    value: this.users.filter(u => u.role==='Supervisor').length,      icon: 'bi-person-badge' },
    { label: 'Operadores',      value: this.users.filter(u => u.role==='Operador').length,        icon: 'bi-people-fill' }
  ];

  filterName  = '';
  filterRole  = '';
  filterState = '';
  roles  = ['Administrador','Supervisor','Operador'];
  states = ['Activo','Inactivo'];

  get filteredUsers(): User[] {
    return this.users.filter(u =>
      u.fullName.toLowerCase().includes(this.filterName.toLowerCase()) &&
      (this.filterRole   ? u.role  === this.filterRole  : true) &&
      (this.filterState  ? u.state === this.filterState : true)
    );
  }

  get activeCount(): number {
    return this.users.filter(u => u.state === 'Activo').length;
  }

  roleBadge(role: User['role']): string {
    switch (role) {
      case 'Administrador': return 'badge bg-danger';
      case 'Supervisor':    return 'badge bg-primary';
      case 'Operador':      return 'badge bg-success';
    }
  }
  stateBadge(state: User['state']): string {
    return state === 'Activo' ? 'badge bg-success' : 'badge bg-danger';
  }
}
