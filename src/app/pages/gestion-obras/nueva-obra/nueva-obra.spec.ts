import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaObra } from './nueva-obra';

describe('NuevaObra', () => {
  let component: NuevaObra;
  let fixture: ComponentFixture<NuevaObra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaObra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaObra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
