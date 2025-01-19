import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import moment from 'moment';  // Import moment.js to easily format and parse dates

@Component({
  selector: 'app-income-dialog',
  templateUrl: './income-dialog.component.html',
  styleUrl: './income-dialog.component.css'
})
export class IncomeDialogComponent {
  amount = { integer: 0, decimal: 0 };
  tip = { integer: 0, decimal: 0 };

  constructor(
    public dialogRef: MatDialogRef<IncomeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any  // Contains the record and type (income/outcome)
  ) {

    if (this.data.date) {
      this.data.date = this.convertToDate(this.data.date);
    }

    if (this.data.amount==null || this.data.amount==undefined){
      this.data.amount = 0.0;
    } 
    
    if(this.data.tipAmount==null || this.data.tipAmount==undefined) {
      this.data.tipAmount = 0.0;
    }

    this.amount = this.splitAmount(this.data.amount); 
    this.tip = this.splitAmount(this.data.tipAmount);
  }
  
  convertToDate(dateString: string): Date {
    return moment(dateString, 'YYYY-MM-DD').toDate();
  }

  // Convert Date object back to 'YYYY-MM-DD' string before saving
  convertToApiFormat(date: Date): string {
    return moment(date).format('YYYY-MM-DD');
  }

  splitAmount(amount: number) {
    // Force 2 decimal places even if the amount doesn't have decimals
    const amountParts = amount.toFixed(2).split('.');
    return {
      integer: parseInt(amountParts[0], 10), 
      decimal: parseInt(amountParts[1], 10)
    };
  }

  combineParts(integerPart: any, decimalPart: any): number {
    if(integerPart==undefined && decimalPart==undefined){
      return parseFloat(`${0}.${0}`);
    } 
    const decimalValue = decimalPart ? decimalPart.toString().padStart(2, '0') : '00';
    return parseFloat(`${integerPart}.${decimalValue}`);
  }
  
  limitNumberLength(event: any, maxLength: number) {
    let value = event.target.value;

    // Remove any non-digit and non-negative characters
    value = value.replace(/[^0-9]/g, '');

    // Limit the number of digits
    if (value.length > maxLength) {
      value = value.slice(0, maxLength);  // Slice to maxLength
    }

    // Update the input field with the truncated value
    event.target.value = value;
  }
  
  // Save the changes
  save(): void {
    this.data.amount = this.combineParts(this.amount.integer, this.amount.decimal);
    this.data.tipAmount = this.combineParts(this.tip.integer, this.tip.decimal);

    this.data.date = this.convertToApiFormat(this.data.date);
    this.dialogRef.close(this.data);  // Return updated data to the parent
  }

  // Close without saving
  close(): void {
    this.dialogRef.close();
  }
}
