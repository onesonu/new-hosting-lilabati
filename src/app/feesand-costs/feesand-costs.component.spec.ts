import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesandCostsComponent } from './feesand-costs.component';

describe('FeesandCostsComponent', () => {
  let component: FeesandCostsComponent;
  let fixture: ComponentFixture<FeesandCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeesandCostsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeesandCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
