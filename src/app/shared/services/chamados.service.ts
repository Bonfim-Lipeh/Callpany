import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ChamadosService {

  private chamados = [
  {
    id: 10,
    titulo: 'Tela Travada',
    descricao: 'Tela travou no software',
    status: 'Em Andamento',
    setor: 'Financeiro',
    usuario_id: 1,
    data_abertura: '2025-11-13 21:05:22',
    data_fechamento: null
  },
  {
    id: 11,
    titulo: 'Impressora',
    descricao: 'Acabou a tinta da impressora',
    status: 'Aberto',
    setor: 'RH',
    usuario_id: 3,
    data_abertura: '2025-11-13 21:06:06',
    data_fechamento: null
  },
  {
    id: 12,
    titulo: 'Cabo HDMI',
    descricao: 'Estragou o conector',
    status: 'Em Andamento',
    setor: 'Marketing',
    usuario_id: 3,
    data_abertura: '2025-11-13 21:06:42',
    data_fechamento: null
  },
  {
    id: 13,
    titulo: 'Telefone',
    descricao: 'Telefone está com mau contato',
    status: 'Aberto',
    setor: 'Telemarketing',
    usuario_id: 1,
    data_abertura: '2025-11-13 21:07:45',
    data_fechamento: null
  },
  {
    id: 14,
    titulo: 'Manutenção preventiva',
    descricao: 'Atualização de BIOS',
    status: 'Aberto',
    setor: 'Manutenção',
    usuario_id: 1,
    data_abertura: '2025-11-13 21:08:27',
    data_fechamento: null
  },
  {
    id: 15,
    titulo: 'Scanner',
    descricao: 'Scanner parou de funcionar',
    status: 'Concluído',
    setor: 'Almoxarifado',
    usuario_id: 1,
    data_abertura: '2025-11-13 21:08:48',
    data_fechamento: '2025-11-13 21:24:42'
  },
  {
    id: 16,
    titulo: 'Calculadora',
    descricao: 'Calculadora nova',
    status: 'Concluído',
    setor: 'Financeiro',
    usuario_id: 1,
    data_abertura: '2025-11-13 21:19:15',
    data_fechamento: '2025-11-13 21:24:47'
  }
];

  getAll() {
    return this.chamados;
  }

  getById(id: number) {
    return this.chamados.find(c => c.id === id);
  }

  add(chamado: any) {
    chamado.id = Date.now();
    chamado.criadoEm = new Date().toISOString().split('T')[0];
    this.chamados.push(chamado);
  }

  update(chamado: any) {
    const idx = this.chamados.findIndex(c => c.id === chamado.id);
    this.chamados[idx] = chamado;
  }

  delete(id: number) {
    this.chamados = this.chamados.filter(c => c.id !== id);
  }
}
