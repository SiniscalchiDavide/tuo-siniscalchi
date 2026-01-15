import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Terzo } from './terzo';

describe('Terzo', () => {
  let component: Terzo;
  let fixture: ComponentFixture<Terzo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Terzo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Terzo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
