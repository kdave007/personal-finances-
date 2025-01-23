import { Component, OnInit, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { OutcomeDialogComponent } from './outcome-dialog/outcome-dialog.component';

export interface OutcomeElement {
  input_id: number;
  date: string;
  amount: number;
  form: 'credit' | 'cash';
  concept: string;
  description: string;
  isEditing?: boolean;
  amountIntegerPart?: number;
  amountDecimalPart?: number;
  lastValues?: object;
}

@Component({
  selector: 'app-outcome-table',
  templateUrl: './outcome-table.component.html',
  styleUrl: './outcome-table.component.css'
})
export class OutcomeTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['select', 'input_id', 'date', 'form', 'amount', 'concept', 'description', 'actions'];
  
  selection = new SelectionModel<OutcomeElement>(true, []);

  maxLengthInputValues = {
    concept: 25,
    description: 25,
    amount: 10
  }

  ELEMENT_DATA: OutcomeElement[] = [
    { input_id: 1, date: '2024-08-01', amount: 18.99, form: 'credit', concept: 'Rent', description: 'Monthly rent payment' },
    { input_id: 2, date: '2024-08-02', amount: 45.25, form: 'cash', concept: 'Utilities', description: 'Electricity bill' },
    { input_id: 3, date: '2024-08-03', amount: 12.90, form: 'credit', concept: 'Internet', description: 'Monthly internet service' },
    { input_id: 4, date: '2024-08-04', amount: 30.00, form: 'cash', concept: 'Gas', description: 'Car fuel' },
    { input_id: 5, date: '2024-08-05', amount: 22.13, form: 'credit', concept: 'Insurance', description: 'Car insurance payment' }
  ];

  dataSource = new MatTableDataSource<OutcomeElement>(this.ELEMENT_DATA);

  // Column Filter
  filterColumn: string = 'concept'; // Default to concept filter
  filterValue: string = '';

  constructor(private zone: NgZone, public dialog: MatDialog) {}

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  openOutcomeDialog(record: any): void {
    // TODO: Implement OutcomeDialogComponent
    const dialogRef = this.dialog.open(OutcomeDialogComponent, {
      width: '400px',
      data: { ...record },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        for (const [key, value] of Object.entries(result)) {
          record[key] = result[key];
        }
      }
    });
  }

  applyFilter() {
    const filterValue = this.filterValue.trim().toLowerCase();

    this.dataSource.filterPredicate = (data: OutcomeElement, filter: string) => {
      if (this.filterColumn === 'input_id') {
        return data.input_id.toString().toLowerCase().includes(filter);
      } else if (this.filterColumn === 'date') {
        return data.date.toLowerCase().includes(filter);
      } else if (this.filterColumn === 'concept') {
        return data.concept.toLowerCase().includes(filter);
      }
      return false;
    };

    this.dataSource.filter = filterValue;
  }
}
