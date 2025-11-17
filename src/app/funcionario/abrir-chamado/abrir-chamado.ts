import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-abrir-chamado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './abrir-chamado.html',
  styleUrls: ['./abrir-chamado.css']
})
export class AbrirChamadoComponent {
  problema = '';
  descricao = '';
  arquivoName = '';
  nivelSelecionado = '';
  nivelUrgencia: string[] = ['baixa', 'média', 'alta', 'crítica'];


  constructor(private router: Router) {}

  onFileChange(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      this.arquivoName = file.name;
    } else {
      this.arquivoName = '';
    }
  }

  voltar() {
  this.router.navigate(['/funcionario']);
}



  enviar() {
    if (!this.problema.trim() || !this.descricao.trim()) {
      alert('Preencha o problema e a descrição.');
      return;
    }
    // Aqui você faria o envio para API. Nesta demo, simula e redireciona:
    // gerar ticket e enviar para tela de confirmação como exemplo:
    const ticketId = Math.floor(Math.random()*90000)+10000;
    // utilizar state com queryParams ou serviço; para simplicidade, passa por localStorage:
    localStorage.setItem('lastTicket', ticketId.toString());
    this.router.navigate(['/confirmacao']);
  }
}
