import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionObras } from './gestion-obras';

describe('GestionObras', () => {
  let component: GestionObras;
  let fixture: ComponentFixture<GestionObras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionObras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionObras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
