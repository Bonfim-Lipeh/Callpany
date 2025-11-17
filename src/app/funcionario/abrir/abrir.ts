import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-abrir-chamado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './abrir.html',
  styleUrls: ['./abrir.css']
})
export class AbrirChamadoComponent {

  problema = '';
  urgencia = '';
  descricao = '';

  constructor(private router: Router) {}

  enviar() {
    if (!this.problema || !this.urgencia || !this.descricao) {
      alert('Preencha todos os campos.');
      return;
    }

    const ticket = Math.floor(Math.random() * 90000) + 10000;
    localStorage.setItem('lastTicket', ticket.toString());

    this.router.navigate(['/confirmacao']);
  }

  voltar() {
    this.router.navigate(['/central']);
  }
}
