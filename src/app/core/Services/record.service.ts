import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  recordSample = [
    { date: '2024-07-01', type: 'income', onHold: false, description: 'Salary', amount: 3000, form: 'credit' },
    { date: '2024-07-05', type: 'outcome', onHold: true, description: 'Grocery', amount: 150, form: 'cash' },
    { date: '2024-07-10', type: 'income', onHold: false, description: 'Freelance', amount: 500, form: 'credit' },
    { date: '2024-07-15', type: 'outcome', onHold: false, description: 'Utilities', amount: 200, form: 'credit' },
    { date: '2024-07-20', type: 'income', onHold: false, description: 'Bonus', amount: 1000, form: 'credit' },
    { date: '2024-07-25', type: 'outcome', onHold: true, description: 'Entertainment', amount: 100, form: 'cash' },
    { date: '2024-07-30', type: 'outcome', onHold: false, description: 'Subscription', amount: 50, form: 'credit' }
  ];

  private apiUrl = 'https://api.example.com/records';

  constructor(private http: HttpClient) { }

  getRecords() : Observable<any[]> {
    return this.http.get<any>(this.apiUrl);
  }
}
