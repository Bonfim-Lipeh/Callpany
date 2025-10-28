import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-central',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './central.html',
  styleUrls: ['./central.css']
})
export class CentralComponent {
  constructor(private router: Router) {}

  abrir() { this.router.navigate(['/abrir']); }
  visualizar() { alert('Funcionalidade "Visualizar Chamado" ainda não implementada nesta demo.'); }
}
