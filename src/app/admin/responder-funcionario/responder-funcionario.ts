import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-responder-funcionario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './responder-funcionario.html',
  styleUrl: './responder-funcionario.css'
})
export class ResponderFuncionarioComponent {

  funcionario = '';
  mensagem = '';

  enviar() {
    if (!this.funcionario || !this.mensagem) {
      alert("Preencha o nome do funcionário e a mensagem.");
      return;
    }

    // Aqui depois você integra com backend
    console.log("Mensagem enviada:", {
      funcionario: this.funcionario,
      mensagem: this.mensagem
    });

    alert("Mensagem enviada com sucesso!");
    this.funcionario = '';
    this.mensagem = '';
  }

}
