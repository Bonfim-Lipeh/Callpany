import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FuncionariosService {

  private funcionarios = [
    { id: 1, nome: 'Felipe', setor: 'TI', risco: 'não', telefone: '119999999' },
    { id: 2, nome: 'Letícia', setor: 'RH', risco: 'sim', telefone: '118888888' }
  ];

  getAll() {
    return this.funcionarios;
  }

  getById(id: number) {
    return this.funcionarios.find(f => f.id === id);
  }

  add(func: any) {
    func.id = Date.now();
    this.funcionarios.push(func);
  }

  update(funcAtualizado: any) {
    const i = this.funcionarios.findIndex(f => f.id === funcAtualizado.id);
    this.funcionarios[i] = funcAtualizado;
  }

  delete(id: number) {
    this.funcionarios = this.funcionarios.filter(f => f.id !== id);
  }
}
