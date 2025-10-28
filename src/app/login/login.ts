import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  codigo = '';
  senha = '';

  constructor(private router: Router) {}

  acessar() {
    // validação simples (só para demo)
    if (this.codigo.trim() && this.senha.trim()) {
      this.router.navigate(['/central']);
    } else {
      alert('Informe seu código e senha.');
    }
  }
}
