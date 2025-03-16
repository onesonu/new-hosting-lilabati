import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmissioninfoComponent } from './addmissioninfo.component';

describe('AddmissioninfoComponent', () => {
  let component: AddmissioninfoComponent;
  let fixture: ComponentFixture<AddmissioninfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddmissioninfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmissioninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
