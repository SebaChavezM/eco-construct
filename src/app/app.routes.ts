import { Routes } from '@angular/router';
import { LoginComponent }          from './pages/login/login';
import { DashboardComponent }      from './pages/dashboard/dashboard';
import { GestionObrasComponent }   from './pages/gestion-obras/gestion-obras';
import { EditarObraComponent }     from './pages/gestion-obras/editar/editar';
import { NuevaObraComponent }      from './pages/gestion-obras/nueva-obra/nueva-obra';
import { DetallesObraComponent }   from './pages/gestion-obras/ver-detalles/ver-detalles';
import { RegistroResiduosComponent } from './pages/registro-residuos/registro-residuos';
import { TransporteComponent } from './pages/transporte/transporte';
import { PerfilComponent }         from './pages/perfil/perfil';
import { UsuariosComponent }       from './pages/usuarios/usuarios';

export const routes: Routes = [
  { path: '',                         redirectTo: 'login',                 pathMatch: 'full' },
  { path: 'login',                    component: LoginComponent },
  { path: 'dashboard',                component: DashboardComponent },

  { path: 'gestion-obras',            component: GestionObrasComponent },
  { path: 'gestion-obras/nueva',      component: NuevaObraComponent },
  { path: 'gestion-obras/editar/:id', component: EditarObraComponent },
  { path: 'gestion-obras/detalles/:id', component: DetallesObraComponent },

  { path: 'registro-residuos', component: RegistroResiduosComponent },

  { path: 'transporte', component: TransporteComponent },

  { path: 'perfil',                   component: PerfilComponent },
  { path: 'usuarios',                 component: UsuariosComponent },

  { path: '**',                       redirectTo: 'dashboard' }
];
