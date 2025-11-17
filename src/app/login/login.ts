import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';


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

 constructor(
  private router: Router,
  private auth: AuthService
) {}


  acessar() {
  const user = this.auth.login(this.codigo, this.senha);

  if (!user) {
    alert('Credenciais inválidas');
    return;
  }

  if (user.tipo === 'admin') {
    this.router.navigate(['/admin']);
  } else {
    this.router.navigate(['/funcionario']);
  }
}}
