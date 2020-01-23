/**
Importing constant and required modules
 */
import { Injectable } from '@angular/core';
import { dataUrl } from '../constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/**
Creating meta data
 */
@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
/**
Making http request to get the required data
*/
constructor(private http:HttpClient) { }
  getEmployeeData():Observable<any>{
    return this.http.get(dataUrl);
  }
}
