import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abrir } from './abrir';

describe('Abrir', () => {
  let component: Abrir;
  let fixture: ComponentFixture<Abrir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Abrir]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abrir);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
