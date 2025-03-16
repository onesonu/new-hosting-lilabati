import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class12thComponent } from './class12th.component';

describe('Class12thComponent', () => {
  let component: Class12thComponent;
  let fixture: ComponentFixture<Class12thComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class12thComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Class12thComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
