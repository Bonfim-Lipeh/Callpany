import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard';
import { FuncionariosComponent } from './funcionarios/funcionarios';
import { FuncionariosFormComponent } from './funcionarios-form/funcionarios-form';
import { ResponderFuncionarioComponent } from './responder-funcionario/responder-funcionario';

// IMPORTS QUE ESTÃO FALTANDO:
import { ChamadosComponent } from './chamados/chamados';
import { ChamadosFormComponent } from './chamados-form/chamados-form';

export const ADMIN_ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent },

  { path: 'funcionarios', component: FuncionariosComponent },
  { path: 'funcionarios/novo', component: FuncionariosFormComponent },
  { path: 'funcionarios/editar/:id', component: FuncionariosFormComponent },

  // AGORA FUNCIONA
  { path: 'chamados', component: ChamadosComponent },
  { path: 'chamados/novo', component: ChamadosFormComponent },
  { path: 'chamados/editar/:id', component: ChamadosFormComponent },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
