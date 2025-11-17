import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponderFuncionario } from './responder-funcionario';

describe('ResponderFuncionario', () => {
  let component: ResponderFuncionario;
  let fixture: ComponentFixture<ResponderFuncionario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponderFuncionario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponderFuncionario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
