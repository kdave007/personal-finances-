import { Component } from '@angular/core';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrl: './add-record.component.css'
})

export class AddRecordComponent {
  record = {
    date: '',
    type: 'income',
    onHold: false,
    description: '',
    amount: 0,
    form: 'credit'
  };

  onSubmit() {
    // Handle the form submission
    console.log('Record added:', this.record);
    // Reset form after submission
    this.record = {
      date: '',
      type: 'income',
      onHold: false,
      description: '',
      amount: 0,
      form: 'credit'
    };
  }
}
