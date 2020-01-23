/**
Importing required service and angular files 
*/
import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../../services/employee-data.service';
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
employeeData:string[];
  constructor(private api:EmployeeDataService) { }
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
/**Declaring the function */
  ngOnInit() {
    this.getEmployeeData();
  }

}
