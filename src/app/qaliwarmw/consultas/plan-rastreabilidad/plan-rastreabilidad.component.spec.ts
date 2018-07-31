import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanRastreabilidadComponent } from './plan-rastreabilidad.component';

describe('PlanRastreabilidadComponent', () => {
  let component: PlanRastreabilidadComponent;
  let fixture: ComponentFixture<PlanRastreabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanRastreabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanRastreabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
