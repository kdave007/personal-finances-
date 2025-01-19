import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-outcome-table',
  templateUrl: './outcome-table.component.html',
  styleUrl: './outcome-table.component.css'
})
export class OutcomeTableComponent {
  constructor(public dialog: MatDialog) {}
}
