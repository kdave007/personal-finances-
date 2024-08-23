import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})



export class HomeComponent implements OnInit, AfterViewInit{
  ELEMENT_DATA: TransactionElement[] = [
    { id: 1, date: '2024-08-01', amount: 19.99, form: 'credit', concept: 'Dinner', tipAmount: 3.00 },
    { id: 2, date: '2024-08-02', amount: 45.25, form: 'cash', concept: 'Groceries', tipAmount: 0.00 },
    { id: 3, date: '2024-08-03', amount: 12.90, form: 'credit', concept: 'Cafe', tipAmount: 2.00 },
    { id: 4, date: '2024-08-04', amount: 30.00, form: 'cash', concept: 'Bar', tipAmount: 5.50 },
    { id: 5, date: '2024-08-05', amount: 22.13, form: 'credit', concept: 'Bookstore', tipAmount: 0.00 },
    { id: 6, date: '2024-08-06', amount: 8.99, form: 'credit', concept: 'Fast Food', tipAmount: 1.50 },
    { id: 7, date: '2024-08-07', amount: 100.00, form: 'cash', concept: 'Clothing', tipAmount: 0.00 },
    { id: 8, date: '2024-08-08', amount: 60.22, form: 'credit', concept: 'Pet Supplies', tipAmount: 0.00 },
    { id: 9, date: '2024-08-09', amount: 15.98, form: 'cash', concept: 'Lunch', tipAmount: 2.50 },
    { id: 10, date: '2024-08-10', amount: 200.00, form: 'credit', concept: 'Electronics', tipAmount: 0.00 },
    { id: 11, date: '2024-08-11', amount: 35.50, form: 'cash', concept: 'Gas', tipAmount: 0.00 },
    { id: 12, date: '2024-08-12', amount: 22.67, form: 'credit', concept: 'Gym', tipAmount: 0.00 },
    { id: 13, date: '2024-08-13', amount: 18.00, form: 'cash', concept: 'Movie', tipAmount: 3.00 },
    { id: 14, date: '2024-08-14', amount: 29.99, form: 'credit', concept: 'Hardware Store', tipAmount: 0.00 },
    { id: 15, date: '2024-08-15', amount: 9.50, form: 'cash', concept: 'Bakery', tipAmount: 1.00 },
    { id: 16, date: '2024-08-16', amount: 75.00, form: 'credit', concept: 'Restaurant', tipAmount: 7.00 },
    { id: 17, date: '2024-08-17', amount: 10.99, form: 'cash', concept: 'Ice Cream', tipAmount: 1.00 },
    { id: 18, date: '2024-08-18', amount: 5.75, form: 'credit', concept: 'Parking', tipAmount: 0.00 },
    { id: 19, date: '2024-08-19', amount: 15.00, form: 'cash', concept: 'Car Wash', tipAmount: 2.00 },
    { id: 20, date: '2024-08-20', amount: 100.50, form: 'credit', concept: 'Massage', tipAmount: 10.00 },
    { id: 21, date: '2024-08-21', amount: 120.75, form: 'cash', concept: 'Hotel', tipAmount: 15.00 },
    { id: 22, date: '2024-08-22', amount: 85.00, form: 'credit', concept: 'Flight', tipAmount: 0.00 },
    { id: 23, date: '2024-08-23', amount: 50.00, form: 'cash', concept: 'Train Ticket', tipAmount: 0.00 },
    { id: 24, date: '2024-08-24', amount: 30.40, form: 'credit', concept: 'Pharmacy', tipAmount: 0.00 },
    { id: 25, date: '2024-08-25', amount: 22.11, form: 'cash', concept: 'Breakfast', tipAmount: 3.00 },
  ];
  

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ['select', 'id', 'date', 'amount', 'form', 'concept', 'tipAmount', 'actions'];
  dataSource = new MatTableDataSource<TransactionElement>(this.ELEMENT_DATA);
  selection = new SelectionModel<TransactionElement>(true, []);

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

  editRow(row: TransactionElement) {
    row.isEditing = true;
  }

  saveRow(row: TransactionElement) {
    row.isEditing = false;
    // Implement save logic here
  }

}


export interface TransactionElement {
  id: number;
  date: string;
  amount: number;
  form: 'credit' | 'cash';
  concept: string;
  tipAmount: number;
  isEditing?: boolean;
}