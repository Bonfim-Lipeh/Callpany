import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

  logout() {
  localStorage.clear();
  sessionStorage.clear();
  console.log("Logout realizado.");

  // redirecionamento
  window.location.href = '/login';
}


  responderFuncionario() {
    console.log("Abrir módulo de resposta ao funcionário");
  }

}
