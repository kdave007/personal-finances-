import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RecordService } from '../Services/record.service';
//import { Record } from '../models/record.model';

@Injectable({
  providedIn: 'root'
})
export class RecordResolver implements Resolve<any> {

  constructor(private recordService: RecordService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.recordService.getRecords();
  }
}