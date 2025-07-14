import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../usuarios/user.service';
import { User } from '../usuarios/user.model';
import { ToastrService } from 'ngx-toastr';
declare var bootstrap: any;

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './usuarios.html',
  styleUrls: ['./usuarios.css']
})
export class UsuariosComponent implements OnInit {
  users: User[] = [];
  usuarioSeleccionado: User | null = null;
  currentUser = { fullName: 'Administrador', email: 'admin@ecoconstruct.com' };
  nuevoUsuario: Partial<User> = {
    role: 'Operador' };

  filterName = '';
  filterRole = '';
  filterState = '';
  roles = ['Administrador', 'Supervisor', 'Operador'];
  states = ['Activo', 'Inactivo'];

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe(data => {
      this.users = data.map(u => ({
        ...u,
        state: 'Activo',
        projects: Math.floor(Math.random() * 6),
        lastAccess: '2024-01-22'
      }));
    });
  }

  get filteredUsers(): User[] {
    return this.users.filter(u =>
      u.username.toLowerCase().includes(this.filterName.toLowerCase()) &&
      (this.filterRole ? u.role === this.filterRole : true) &&
      (this.filterState ? u.state === this.filterState : true)
    );
  }

  get activeCount(): number {
    return this.users.filter(u => u.state === 'Activo').length;
  }

  get stats() {
    return [
      { label: 'Total Usuarios', value: this.users.length, icon: 'bi-people' },
      { label: 'Administradores', value: this.users.filter(u => u.role === 'Administrador').length, icon: 'bi-shield-lock' },
      { label: 'Supervisores', value: this.users.filter(u => u.role === 'Supervisor').length, icon: 'bi-person-badge' },
      { label: 'Operadores', value: this.users.filter(u => u.role === 'Operador').length, icon: 'bi-people-fill' }
    ];
  }

  roleBadge(role: User['role']): string {
    switch (role) {
      case 'Administrador': return 'badge bg-danger';
      case 'Supervisor':    return 'badge bg-primary';
      case 'Operador':      return 'badge bg-success';
      default:              return 'badge bg-secondary';
    }
  }

  stateBadge(state: User['state']): string {
    return state === 'Activo' ? 'badge bg-success' : 'badge bg-danger';
  }

  abrirModal(usuario: User) {
    this.usuarioSeleccionado = { ...usuario };
  }

  guardarCambios() {
    if (this.usuarioSeleccionado && this.usuarioSeleccionado.id) {
      this.userService.update(this.usuarioSeleccionado.id, this.usuarioSeleccionado).subscribe({
        next: () => {
          const index = this.users.findIndex(u => u.id === this.usuarioSeleccionado!.id);
          if (index > -1) this.users[index] = this.usuarioSeleccionado!;
          this.usuarioSeleccionado = null;

          const modal = bootstrap.Modal.getInstance(document.getElementById('editUserModal')!);
          modal?.hide();

          this.toastr.success('Usuario actualizado correctamente', 'Éxito');
        },
        error: () => {
          this.toastr.error('Error al actualizar el usuario', 'Error');
        }
      });
    }
  }

  esPasswordValido(password: string): boolean {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  }

  crearUsuario() {
    if (!this.nuevoUsuario.username || !this.nuevoUsuario.email || !this.nuevoUsuario.role) {
      this.toastr.error('Todos los campos obligatorios deben estar completos', 'Campos incompletos');
      return;
    }

    if (!this.nuevoUsuario.password || !this.esPasswordValido(this.nuevoUsuario.password)) {
      this.toastr.error('La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número', 'Contraseña inválida');
      return;
    }

    this.userService.create(this.nuevoUsuario as User).subscribe({
      next: (createdUser) => {
        this.users.push({
          ...createdUser,
          state: 'Activo',
          projects: 0,
          lastAccess: '—'
        });
        this.nuevoUsuario = { role: 'Operador' };
        const modal = bootstrap.Modal.getInstance(document.getElementById('createUserModal')!);
        modal?.hide();
        this.toastr.success('Usuario creado exitosamente', 'Éxito');
      },
      error: () => {
        this.toastr.error('Hubo un error al crear el usuario', 'Error');
      }
    });
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
