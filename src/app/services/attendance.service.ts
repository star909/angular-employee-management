import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  /** Observables declaring the source stream  */
private employeeAttendanceStartSource = new Subject<string>();
private employeeAttendanceConfirmSource = new Subject<string>();

employeeAttendanceStarted$ = this.employeeAttendanceStartSource.asObservable();
employeeAttendanceConfirmed$ = this.employeeAttendanceConfirmSource.asObservable();

/** Method to intiate the process for attendance and its confirmation */
startEmployeeAttendance(attendance:string){
  this.employeeAttendanceStartSource.next(attendance);
}
confirmEmployeeAttendance(employee:string){
  this.employeeAttendanceConfirmSource.next(employee);
}

  constructor() { }
}
