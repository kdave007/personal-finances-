import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeDialogComponent } from './outcome-dialog.component';

describe('OutcomeDialogComponent', () => {
  let component: OutcomeDialogComponent;
  let fixture: ComponentFixture<OutcomeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutcomeDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutcomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
