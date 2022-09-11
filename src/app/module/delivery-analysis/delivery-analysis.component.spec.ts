import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAnalysisComponent } from './delivery-analysis.component';

describe('DeliveryAnalysisComponent', () => {
  let component: DeliveryAnalysisComponent;
  let fixture: ComponentFixture<DeliveryAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
