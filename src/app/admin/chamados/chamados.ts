import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChamadosService } from '../../shared/services/chamados.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chamados',
  standalone: true,
   imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './chamados.html',
  styleUrls: ['./chamados.css']
})
export class ChamadosComponent {

  chamados: any[] = [];


  constructor(private service: ChamadosService) {}

  ngOnInit() {
    this.chamados = this.service.getAll();
  }

  excluir(id: number) {
    if (confirm('Deseja realmente excluir este chamado?')) {
      this.service.delete(id);
      this.chamados = this.service.getAll();
    }
  }
}
