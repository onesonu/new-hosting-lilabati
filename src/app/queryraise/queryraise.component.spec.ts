import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryraiseComponent } from './queryraise.component';

describe('QueryraiseComponent', () => {
  let component: QueryraiseComponent;
  let fixture: ComponentFixture<QueryraiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueryraiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryraiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
