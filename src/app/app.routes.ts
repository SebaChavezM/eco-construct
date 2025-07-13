import { Routes } from '@angular/router';
import { LoginComponent }          from './pages/login/login';
import { DashboardComponent }      from './pages/dashboard/dashboard';
import { GestionObrasComponent }   from './pages/gestion-obras/gestion-obras';
import { EditarObraComponent }     from './pages/gestion-obras/editar/editar';
import { NuevaObraComponent }      from './pages/gestion-obras/nueva-obra/nueva-obra';
import { DetallesObraComponent }   from './pages/gestion-obras/ver-detalles/ver-detalles';
import { RegistroResiduosComponent } from './pages/registro-residuos/registro-residuos';
import { TransporteComponent } from './pages/transporte/transporte';
import { ReportesComponent } from './pages/reportes/reportes';
import { PerfilComponent }         from './pages/perfil/perfil';
import { UsuariosComponent }       from './pages/usuarios/usuarios';
import { InventarioComponent } from './pages/inventario/inventario';

import { MsalGuard } from '@azure/msal-angular';

export const routes: Routes = [
  { path: '', redirectTo: 'login',                 pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [MsalGuard] },

  { path: 'gestion-obras', component: GestionObrasComponent, canActivate: [MsalGuard] },
  { path: 'gestion-obras/nueva', component: NuevaObraComponent, canActivate: [MsalGuard] },
  { path: 'gestion-obras/editar/:id', component: EditarObraComponent, canActivate: [MsalGuard] },
  { path: 'gestion-obras/detalles/:id', component: DetallesObraComponent, canActivate: [MsalGuard] },

  { path: 'registro-residuos', component: RegistroResiduosComponent, canActivate: [MsalGuard] },

  { path: 'transporte', component: TransporteComponent, canActivate: [MsalGuard] },

  { path: 'inventario', component: InventarioComponent, canActivate: [MsalGuard] },

  { path: 'reportes', component: ReportesComponent, canActivate: [MsalGuard] },

  { path: 'perfil', component: PerfilComponent, canActivate: [MsalGuard] },
  { path: 'usuarios', component: UsuariosComponent, canActivate: [MsalGuard] },

  { path: '**', redirectTo: 'dashboard' }
];
