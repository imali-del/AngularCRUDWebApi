import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartmentList } from '../components/department/Department';
 
@Injectable({
  providedIn: 'root'
})
export class SharedService {
 
private apiUrl = 'http://localhost:51758/api';
private photoUrl = 'http://localhost:51758/api/EmployeeSaveFile';
  constructor(private http:HttpClient) { 
  }
  
  getDepList():Observable<DepartmentList[]>{
    const url = `${this.apiUrl}/Department`;
    return this.http.get<DepartmentList[]>(this.apiUrl+'/Department');
  }

  addDepartment(val:any){
    return this.http.post<any>(this.apiUrl+'/Department',val);
  }

  updateDepartment(val:any){
    return this.http.put<any>(this.apiUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    debugger
    return this.http.delete<any>(this.apiUrl+'/Department/'+ val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.apiUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.http.post(this.apiUrl+'/Employee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.apiUrl+'/Employee',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.apiUrl+'/Employee/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.apiUrl+'/Employee/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl+'/Employee/GetAllDepartmentNames');
  }

}
