import { Routes } from '@angular/router';
import { CentralComponent } from './central/central';
import { AbrirChamadoComponent } from './abrir-chamado/abrir-chamado';
import { ConfirmacaoComponent } from './confirmacao/confirmacao';
import { MeusChamadosComponent } from './meus-chamados/meus-chamados';

export const FUNCIONARIO_ROUTES: Routes = [
  { path: '', component: CentralComponent },
  { path: 'abrir', component: AbrirChamadoComponent },
  { path: 'confirmacao', component: ConfirmacaoComponent },
  { path: 'meus-chamados', component: MeusChamadosComponent },
];
