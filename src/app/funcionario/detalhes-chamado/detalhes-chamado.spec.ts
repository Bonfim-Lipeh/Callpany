import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheChamado } from './detalhes-chamado';

describe('DetalheChamado', () => {
  let component: DetalheChamado;
  let fixture: ComponentFixture<DetalheChamado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheChamado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheChamado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
