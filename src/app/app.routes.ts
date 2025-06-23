// src/app/app.routes.ts
import { LoginComponent }             from './pages/login/login';
import { DashboardComponent }         from './pages/dashboard/dashboard';
import { GestionObrasComponent }      from './pages/gestion-obras/gestion-obras';
import { PerfilComponent }            from './pages/perfil/perfil';
import { UsuariosComponent }          from './pages/usuarios/usuarios';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '',               redirectTo: 'login',                 pathMatch: 'full' },
  { path: 'login',          component: LoginComponent },
  { path: 'dashboard',      component: DashboardComponent },
  { path: 'gestion-obras',  component: GestionObrasComponent },
  { path: 'perfil',         component: PerfilComponent },
  { path: 'usuarios',       component: UsuariosComponent },
  { path: '**',             redirectTo: 'dashboard' }
];
