/**
Importing required service and angular files 
*/
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { EmployeeDataService } from '../../services/employee-data.service';
import { AttendanceService } from '../../services/attendance.service';
import { Subscription } from 'rxjs';

/**
Creating meta data
 */
@Component({
  selector: 'app-employee-interface',
  templateUrl: './employee-interface.component.html',
  styleUrls: ['./employee-interface.component.css']
})
/** 
Creating class for getting required data
 */
export class EmployeeInterfaceComponent implements OnInit {
@Output() outputToManager = new EventEmitter<string>();  /** transfer of variable to parent component */
employeeData:string[];
attendance ='<attendance not started>';
confirmed = false;
started = false;
subscription:Subscription;
/** Subscription to observable for getting confirmation */
  constructor(private api:EmployeeDataService,
              private attendanceService:AttendanceService) { 
                this.subscription = attendanceService.employeeAttendanceConfirmed$.subscribe(
                  attendance=>{
                    this.attendance=attendance;
                    this.started = true;
                    this.confirmed = false;
                  });
                
              }                   
  /**Subscribing the http request to get the required data */
private getEmployeeData():void{
try{
  this.api.getEmployeeData()
  .subscribe(data=>{
    this.employeeData = data;
    console.log(this.employeeData);

  });
}catch(ex){
  console.log(ex);
}
}
/**Confirmation method for the attendance */
confirmAttendance(employee:string){
  this.confirmed = true;
  this.outputToManager.emit(employee);
}

/**Declaring the function */
  ngOnInit() {
    this.getEmployeeData();
  }

}
