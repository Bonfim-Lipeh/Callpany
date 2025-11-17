import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChamadosService } from '../../shared/services/chamados.service';

@Component({
  selector: 'app-chamados-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './chamados-form.html',
  styleUrls: ['./chamados-form.css']
})
export class ChamadosFormComponent {

  chamado: any = {
    problema: '',
    descricao: '',
    setor: '',
    urgencia: '',
    status: ''
  };

  editando = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ChamadosService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.editando = true;
      const existente = this.service.getById(id);
      if (existente) this.chamado = { ...existente };
    }
  }

  salvar() {
    if (this.editando) {
      this.service.update(this.chamado);
    } else {
      this.service.add(this.chamado);
    }
    this.router.navigate(['/admin/chamados']);
  }
}
