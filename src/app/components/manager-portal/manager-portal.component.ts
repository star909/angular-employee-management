/**Importing required file */
import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';
/**Creating meta data */
@Component({
  selector: 'app-manager-portal',
  templateUrl: './manager-portal.component.html',
  styleUrls: ['./manager-portal.component.css']
})
/**creating class to create method for making attendance confirmation  */
export class ManagerPortalComponent implements OnInit {
employeeCurrentValue: string[]=[];
confirmation:string[] =[];
employeeAttendances=['Office open'];
nextEmployeeAttendance=0;
  constructor(private attendanceService:AttendanceService) { }
  /** getting data of employee */
getEmployeeName(selected){
  if(selected){
    this.employeeCurrentValue =selected;
    console.log(this.employeeCurrentValue);
  }
}
/**method to confirm attendance */
employeeAttendance(){
  let employeeAttendance =this.employeeAttendances[this.nextEmployeeAttendance++];
  this.attendanceService.startEmployeeAttendance(employeeAttendance);
  this.confirmation.push(`"${employeeAttendance}"`);
  if(this.nextEmployeeAttendance>=this.employeeAttendances.length){this.nextEmployeeAttendance=0;}
}
  ngOnInit() {
  }

}
