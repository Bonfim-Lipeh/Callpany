import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-central',
  templateUrl: './central.html',
  styleUrls: ['./central.css']
})
export class CentralComponent {

  constructor(private router: Router) {}

  abrir() {
  this.router.navigate(['/funcionario/abrir']);
}

visualizar() {
  this.router.navigate(['/funcionario/meus-chamados']);
}

  logout() {
  localStorage.clear(); // caso você queira limpar futuro token
  sessionStorage.clear(); // caso use sessão

  this.router.navigate(['/']);
}


}
