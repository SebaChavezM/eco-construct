import { Routes } from '@angular/router';
import { LoginComponent }          from './pages/login/login';
import { DashboardComponent }      from './pages/dashboard/dashboard';
import { GestionObrasComponent }   from './pages/gestion-obras/gestion-obras';
import { NuevaObraComponent }      from './pages/gestion-obras/nueva-obra/nueva-obra';
import { RegistroResiduosComponent } from './pages/registro-residuos/registro-residuos';
import { TransporteComponent } from './pages/transporte/transporte';
import { ReportesComponent } from './pages/reportes/reportes';
import { PerfilComponent }         from './pages/perfil/perfil';
import { UsuariosComponent }       from './pages/usuarios/usuarios';
import { InventarioComponent } from './pages/inventario/inventario';
import { ProcesarResiduosComponent } from './pages/procesar-residuos/procesar-residuos';

import { MsalGuard } from '@azure/msal-angular';

export const routes: Routes = [
  { path: '', redirectTo: 'login',                 pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [MsalGuard] },

  { path: 'gestion-obras', component: GestionObrasComponent, canActivate: [MsalGuard] },
  { path: 'gestion-obras/nueva', component: NuevaObraComponent, canActivate: [MsalGuard] },
  
  { path: 'registro-residuos', component: RegistroResiduosComponent, canActivate: [MsalGuard] },

  { path: 'transporte', component: TransporteComponent, canActivate: [MsalGuard] },

  { path: 'inventario', component: InventarioComponent, canActivate: [MsalGuard] },

  { path: 'procesar-residuos', component: ProcesarResiduosComponent, canActivate: [MsalGuard] },

  { path: 'reportes', component: ReportesComponent, canActivate: [MsalGuard] },

  { path: 'perfil', component: PerfilComponent, canActivate: [MsalGuard] },
  { path: 'usuarios', component: UsuariosComponent, canActivate: [MsalGuard] },

  { path: '**', redirectTo: 'dashboard' }
];
