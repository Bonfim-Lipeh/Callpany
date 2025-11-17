import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private usuarios = [
    { codigo: 'admin', senha: '123', tipo: 'admin' },
    { codigo: 'jefferson@callpany.com', senha: '123456', cargo: 'funcionario'},
    { codigo: 'willian@callpany.com', senha: '123456', cargo: 'funcionario'},
    { codigo: 'Luiz', email: 'luiz@callpany.com', senha: '123456', cargo:'admin'},
    { codigo: '001', senha: 'abc', tipo: 'funcionario' }
  ];

  login(cod: string, sen: string) {
    return this.usuarios.find(u => u.codigo === cod && u.senha === sen) || null;
  }
}
