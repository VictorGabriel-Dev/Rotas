import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNovaRota } from './button-nova-rota';

describe('ButtonNovaRota', () => {
  let component: ButtonNovaRota;
  let fixture: ComponentFixture<ButtonNovaRota>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonNovaRota]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonNovaRota);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
