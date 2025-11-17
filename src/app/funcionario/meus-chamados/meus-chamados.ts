import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-meus-chamados',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './meus-chamados.html',
  styleUrls: ['./meus-chamados.css']
})
export class MeusChamadosComponent {

  meusChamados = [
    {
      id: 24102,
      problema: 'Computador não liga',
      status: 'Em andamento',
      urgencia: 'Alta',
      criadoEm: '2025-11-10'
    },
    {
      id: 13988,
      problema: 'Falha no sistema',
      status: 'Concluído',
      urgencia: 'Média',
      criadoEm: '2025-11-08'
    }
  ];

  constructor(private router: Router) {}

  voltar() {
    // volta para a lista de chamados do funcionário
    this.router.navigate(['/funcionario']);
  }
}
