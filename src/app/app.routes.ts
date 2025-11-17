import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { CentralComponent } from './funcionario/central/central';
import { AbrirChamadoComponent } from './funcionario/abrir-chamado/abrir-chamado';
import { ConfirmacaoComponent } from './funcionario/confirmacao/confirmacao';


export const routes: Routes = [
  { path: '', component: LoginComponent },


  // ADMIN
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
  },

  // FUNCIONÁRIO
  {
    path: 'funcionario',
    loadChildren: () =>
      import('./funcionario/funcionario.routes').then(m => m.FUNCIONARIO_ROUTES)
  },

  { path: '**', redirectTo: '' }
];
