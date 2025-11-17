import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionariosService } from '../../shared/services/funcionarios.service';

@Component({
  selector: 'app-funcionarios-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './funcionarios-form.html',
  styleUrls: ['./funcionarios-form.css']
})
export class FuncionariosFormComponent {

  id: any;
  funcionario: any = {
    nome: '',
    setor: '',
    risco: 'não',
    telefone: ''
  };

  constructor(
    private route: ActivatedRoute,
    private service: FuncionariosService,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['id'];

    if (this.id !== 'novo') {
      this.funcionario = { ...this.service.getById(Number(this.id)) };
    }
  }

  salvar() {
    if (this.id === 'novo') {
      this.service.add(this.funcionario);
    } else {
      this.service.update(this.funcionario);
    }

    this.router.navigate(['/admin/funcionarios']);
  }
}
