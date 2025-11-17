import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirmacao',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './confirmacao.html',
  styleUrls: ['./confirmacao.css']
})
export class ConfirmacaoComponent implements OnInit {
  ticket: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.ticket = localStorage.getItem('lastTicket');
  }

  toVisualizar() {
    alert('Tela de visualizar chamado (não implementada na demo).');
  }

  toCentral() {
    this.router.navigate(['/central']);
  }
}
