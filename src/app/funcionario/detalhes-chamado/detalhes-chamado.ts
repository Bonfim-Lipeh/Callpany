import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-chamado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhes-chamado.html',
  styleUrls: ['./detalhes-chamado.css']
})
export class DetalhesChamadoComponent {

  chamadoId = 0;

  chamado: any = null;

  chamadosMock = [
    {
      id: 24102,
      problema: 'Computador não liga',
      descricao: 'Ao apertar o botão não há resposta',
      status: 'Em andamento',
      urgencia: 'Alta',
      criadoEm: '2025-11-10',
      historico: [
        'Chamado aberto pelo usuário',
        'Setor técnico analisando',
        'Peça em reposição',
      ]
    },
    {
      id: 13988,
      problema: 'Falha no sistema',
      descricao: 'Sistema trava ao abrir relatórios',
      status: 'Concluído',
      urgencia: 'Média',
      criadoEm: '2025-11-08',
      historico: [
        'Erro reportado',
        'Dev corrigiu o bug',
        'Atualização aplicada',
      ]
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.chamado = this.chamadosMock.find(c => c.id === id) || null;
  }

  voltar() {
    // volta para a lista de chamados do funcionário
    this.router.navigate(['/funcionario/meus-chamados']);
  }
}
