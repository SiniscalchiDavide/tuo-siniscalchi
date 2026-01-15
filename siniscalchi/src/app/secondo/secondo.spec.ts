import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Secondo } from './secondo';

describe('Secondo', () => {
  let component: Secondo;
  let fixture: ComponentFixture<Secondo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Secondo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Secondo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
