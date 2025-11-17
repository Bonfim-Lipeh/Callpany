import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FuncionariosService } from '../../shared/services/funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './funcionarios.html',
  styleUrls: ['./funcionarios.css']
})
export class FuncionariosComponent {

  funcionarios: any[] = [];

  constructor(
    private service: FuncionariosService,
    private router: Router
  ) {
    this.funcionarios = this.service.getAll();
  }

  editar(id: number) {
    this.router.navigate(['/admin/funcionarios/editar', id]);
  }

  adicionar() {
    this.router.navigate(['/admin/funcionarios/novo', 'novo']);
  }

  deletar(id: number) {
    this.service.delete(id);
    this.funcionarios = this.service.getAll();
  }
}
