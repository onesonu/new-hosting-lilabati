import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class11thComponent } from './class11th.component';

describe('Class11thComponent', () => {
  let component: Class11thComponent;
  let fixture: ComponentFixture<Class11thComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Class11thComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Class11thComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
