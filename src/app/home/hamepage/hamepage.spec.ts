import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hamepage } from './hamepage';

describe('Hamepage', () => {
  let component: Hamepage;
  let fixture: ComponentFixture<Hamepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hamepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hamepage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
