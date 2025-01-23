import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import moment from 'moment';

@Component({
  selector: 'app-outcome-dialog',
  templateUrl: './outcome-dialog.component.html',
  styleUrl: './outcome-dialog.component.css'
})
export class OutcomeDialogComponent {
  amount = { integer: 0, decimal: 0 };

  constructor(
    public dialogRef: MatDialogRef<OutcomeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (this.data.date) {
      this.data.date = this.convertToDate(this.data.date);
    }

    if (this.data.amount == null || this.data.amount == undefined) {
      this.data.amount = 0.0;
    }

    this.amount = this.splitAmount(this.data.amount);
  }

  convertToDate(dateString: string): Date {
    return moment(dateString, 'YYYY-MM-DD').toDate();
  }

  convertToApiFormat(date: Date): string {
    return moment(date).format('YYYY-MM-DD');
  }

  splitAmount(amount: number) {
    const amountParts = amount.toFixed(2).split('.');
    return {
      integer: parseInt(amountParts[0], 10),
      decimal: parseInt(amountParts[1], 10)
    };
  }

  combineParts(integerPart: any, decimalPart: any): number {
    if (integerPart == undefined && decimalPart == undefined) {
      return parseFloat(`${0}.${0}`);
    }
    const decimalValue = decimalPart ? decimalPart.toString().padStart(2, '0') : '00';
    return parseFloat(`${integerPart}.${decimalValue}`);
  }

  limitNumberLength(event: any, maxLength: number) {
    let value = event.target.value;
    value = value.replace(/[^0-9]/g, '');
    if (value.length > maxLength) {
      value = value.slice(0, maxLength);
    }
    event.target.value = value;
  }

  save(): void {
    this.data.amount = this.combineParts(this.amount.integer, this.amount.decimal);
    this.data.date = this.convertToApiFormat(this.data.date);
    this.dialogRef.close(this.data);
  }

  close(): void {
    this.dialogRef.close();
  }
}
