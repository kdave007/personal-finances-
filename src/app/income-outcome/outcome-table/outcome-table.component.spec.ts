import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeTableComponent } from './outcome-table.component';

describe('OutcomeTableComponent', () => {
  let component: OutcomeTableComponent;
  let fixture: ComponentFixture<OutcomeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutcomeTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutcomeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
