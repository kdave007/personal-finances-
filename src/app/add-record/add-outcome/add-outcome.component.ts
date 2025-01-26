import { Component } from '@angular/core';

interface OutcomeRecord {
  date: string;
  concept: string;
  form: 'credit' | 'cash' | 'debit' | 'combined';
  amount: number;
  description: string;
}

@Component({
  selector: 'app-add-outcome',
  templateUrl: './add-outcome.component.html',
  styleUrls: ['./add-outcome.component.css']
})
export class AddOutcomeComponent {
  record: OutcomeRecord = {
    date: new Date().toISOString().split('T')[0],
    concept: '',
    form: 'cash',
    amount: 0,
    description: ''
  };

  onSubmit() {
    console.log('Outcome record to submit:', this.record);
    // TODO: Add service call to save record
  }
} 