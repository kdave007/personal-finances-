import { Component, OnInit, ViewChild,AfterViewInit, NgZone } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { IncomeDialogComponent } from './income-dialog/income-dialog.component';
import { FormGroup, FormControl } from '@angular/forms';
import moment from 'moment';



export interface TransactionElement {
  id: number;
  date: string;
  amount: number;
  amountForm: 'credit' | 'cash';
  tipForm: 'credit' | 'cash';
  concept: string;
  tipAmount: number;
  description : string;
  isEditing?: boolean;
  amountIntegerPart?: number;
  amountDecimalPart?: number;
  tipIntegerPart?: number;
  tipDecimalPart?: number;
  lastValues?: object;
}

@Component({
  selector: 'app-income-table',
  templateUrl: './income-table.component.html',
  styleUrl: './income-table.component.css'
})


export class IncomeTableComponent implements OnInit, AfterViewInit{
 
  displayedColumns: string[] = ['select', 'id', 'date', 'concept', 'amountForm', 'amount', 'tipForm', 'tipAmount', 'description', 'actions'];
 
  selection = new SelectionModel<TransactionElement>(true, []);

  maxLengthInputValues = {
    concept : 25,
    description : 25,
    amount : 10,
    tip : 10
  }

  ELEMENT_DATA: TransactionElement[] = [
    { id: 1, date: '2024-08-01', amount: 18.99, tipForm:'cash', amountForm: 'credit', concept: 'Dinner', tipAmount: 3.00 , description:' someddddddddddd descsssssssssssssssssription aboussssssssssssssssssssssst aaaaaaaait'},
    { id: 2, date: '2024-08-02', amount: 45.25, tipForm:'credit', amountForm: 'cash', concept: 'Groceries', tipAmount: 0.00,  description:' some description about it'},
    { id: 3, date: '2024-08-03', amount: 12.90, tipForm:'credit', amountForm: 'credit', concept: 'Cafe', tipAmount: 2.00,  description:' some description about it'},
    { id: 4, date: '2024-08-04', amount: 30.00, tipForm:'cash', amountForm: 'cash', concept: 'Bar', tipAmount: 5.50,  description:' some description about it' },
    { id: 5, date: '2024-08-05', amount: 22.13, tipForm:'credit', amountForm: 'credit', concept: 'Bookstore', tipAmount: 0.00,  description:' some description about it' },
    { id: 6, date: '2024-08-06', amount: 8.99, tipForm:'cash', amountForm: 'credit', concept: 'Fast Food', tipAmount: 1.50,  description:' some description about it' },
    { id: 7, date: '2024-08-07', amount: 100.00, tipForm:'credit', amountForm: 'cash', concept: 'Clothing', tipAmount: 0.00,  description:' some description about it' },
    { id: 8, date: '2024-08-08', amount: 60.22, tipForm:'cash', amountForm: 'credit', concept: 'Pet Supplies', tipAmount: 0.00,  description:' some description about it' },
    { id: 9, date: '2024-08-09', amount: 15.98, tipForm:'cash', amountForm: 'cash', concept: 'Lunch', tipAmount: 2.50 ,  description:' some description about it'},
    { id: 10, date: '2024-08-10', amount: 200.00, tipForm:'credit', amountForm: 'credit', concept: 'Electronics', tipAmount: 0.00,  description:' some description about it' },
    { id: 11, date: '2024-08-11', amount: 35.50, tipForm:'cash', amountForm: 'cash', concept: 'Gas', tipAmount: 0.00 ,  description:' some description about it'},
    { id: 12, date: '2024-08-12', amount: 22.67, tipForm:'credit', amountForm: 'credit', concept: 'Gym', tipAmount: 0.00 ,  description:' some description about it'},
    { id: 13, date: '2024-08-13', amount: 18.00, tipForm:'credit', amountForm: 'cash', concept: 'Movie', tipAmount: 3.00 ,  description:' some description about it'},
    { id: 14, date: '2024-08-14', amount: 29.99, tipForm:'cash', amountForm: 'credit', concept: 'Hardware Store', tipAmount: 0.00 ,  description:' some description about it'},
    { id: 15, date: '2024-08-15', amount: 9.50, tipForm:'cash', amountForm: 'cash', concept: 'Bakery', tipAmount: 1.00,  description:' some description about it' },
    { id: 16, date: '2024-08-16', amount: 75.00, tipForm:'cash', amountForm: 'credit', concept: 'Restaurant', tipAmount: 7.00,  description:' some description about it' },
    { id: 17, date: '2024-08-17', amount: 10.99, tipForm:'credit', amountForm: 'cash', concept: 'Ice Cream', tipAmount: 1.00 ,  description:' some description about it'},
    { id: 18, date: '2024-08-18', amount: 5.75, tipForm:'credit', amountForm: 'credit', concept: 'Parking', tipAmount: 0.00 ,  description:' some description about it'},
    { id: 19, date: '2024-08-19', amount: 15.00, tipForm:'cash', amountForm: 'cash', concept: 'Car Wash', tipAmount: 2.00 ,  description:' some description about it'},
    { id: 20, date: '2024-08-20', amount: 100.50, tipForm:'credit', amountForm: 'credit', concept: 'Massage', tipAmount: 10.00 ,  description:' some description about it'},
    { id: 21, date: '2024-08-21', amount: 120.75, tipForm:'cash', amountForm: 'cash', concept: 'Hotel', tipAmount: 15.00 ,  description:' some description about it'},
    { id: 22, date: '2024-08-22', amount: 85.00, tipForm:'credit', amountForm: 'credit', concept: 'Flight', tipAmount: 0.00 ,  description:' some description about it'},
    { id: 23, date: '2024-08-23', amount: 50.00, tipForm:'cash', amountForm: 'cash', concept: 'Train Ticket', tipAmount: 0.00,  description:' some description about it' },
    { id: 24, date: '2024-08-24', amount: 30.40, tipForm:'credit', amountForm: 'credit', concept: 'Pharmacy', tipAmount: 0.00,  description:' some description about it' },
    { id: 25, date: '2024-08-25', amount: 22.11, tipForm:'credit', amountForm: 'cash', concept: 'Breakfast', tipAmount: 3.00 ,  description:' some description about it'},
  ];


  dataSource = new MatTableDataSource<TransactionElement>(this.ELEMENT_DATA);

   // Column Filter
   filterColumn: string = 'concept'; // Default to concept filter
   filterValue: string = '';

  // TODO: For production, replace with these default values:
  // dateRange = new FormGroup({
  //   start: new FormControl(moment().startOf('month').toDate()),
  //   end: new FormControl(moment().toDate())
  // });

  // Testing configuration: empty default values
  dateRange = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null)
  });

  constructor(private zone: NgZone, public dialog: MatDialog) {
    // TODO: For production, uncomment this initialization:
    // this.fetchDataForDateRange(
    //   moment().startOf('month').format('YYYY-MM-DD'),
    //   moment().format('YYYY-MM-DD')
    // );
  }
  

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

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


  openIncomeDialog(record: any): void {
    const dialogRef = this.dialog.open(IncomeDialogComponent, {
      width: '400px',
      data: { ...record },  // Pass the selected income record
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("RESULT ",result)
      console.log("Record",record);
      if (result) {
          for (const [key, value] of Object.entries(result)) {
            console.log(`Key: ${key}, Value: ${value}`);
         
              record[key] = result[key];
          }
      }
    });
  }

  applyFilter() {
    const filterValue = this.filterValue.trim().toLowerCase();

    this.dataSource.filterPredicate = (data: TransactionElement, filter: string) => {
      if (this.filterColumn === 'id') {
        return data.id.toString().toLowerCase().includes(filter);
      } else if (this.filterColumn === 'date') {
        return data.date.toLowerCase().includes(filter);
      } else if (this.filterColumn === 'concept') {
        return data.concept.toLowerCase().includes(filter);
      }
      return false;
    };

    this.dataSource.filter = filterValue;
  }

  onDateRangeChange(): void {
    if (this.dateRange.value.start && this.dateRange.value.end) {
      const startDate = moment(this.dateRange.value.start).format('YYYY-MM-DD');
      const endDate = moment(this.dateRange.value.end).format('YYYY-MM-DD');
      this.fetchDataForDateRange(startDate, endDate);
    }
  }

  fetchDataForDateRange(startDate: string, endDate: string): void {
    // TODO: Replace this with actual API call
    console.log(`Fetching data from ${startDate} to ${endDate}`);
    // For now, just filter the existing data
    const filteredData = this.ELEMENT_DATA.filter(item => {
      const itemDate = moment(item.date);
      return itemDate.isBetween(startDate, endDate, 'day', '[]');
    });
    this.dataSource.data = filteredData;
  }

}
