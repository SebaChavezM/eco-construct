import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDetalles } from './ver-detalles';

describe('VerDetalles', () => {
  let component: VerDetalles;
  let fixture: ComponentFixture<VerDetalles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerDetalles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerDetalles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
