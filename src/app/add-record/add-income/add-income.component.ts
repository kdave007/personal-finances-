import { Component } from '@angular/core';

interface IncomeRecord {
  date: string;
  concept: string;
  amountForm: 'credit' | 'cash' | 'debit' | 'combined';
  amount: number;
  tipForm: 'credit' | 'cash' | 'debit' | 'combined';
  tipAmount: number;
  description: string;
}

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.css']
})
export class AddIncomeComponent {
  record: IncomeRecord = {
    date: new Date().toISOString().split('T')[0],
    concept: '',
    amountForm: 'cash',
    amount: 0,
    tipForm: 'cash',
    tipAmount: 0,
    description: ''
  };

  onSubmit() {
    console.log('Income record to submit:', this.record);
    // TODO: Add service call to save record
  }
} 