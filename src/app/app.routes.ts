import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { CentralComponent } from './central/central';
import { AbrirChamadoComponent } from './abrir-chamado/abrir-chamado';
import { ConfirmacaoComponent } from './confirmacao/confirmacao';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'central', component: CentralComponent },
  { path: 'abrir', component: AbrirChamadoComponent },
  { path: 'confirmacao', component: ConfirmacaoComponent },
  { path: '**', redirectTo: '' }
];
