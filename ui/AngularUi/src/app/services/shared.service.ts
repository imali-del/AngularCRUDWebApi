import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DepartmentList } from '../components/department/Department';

const httpOptions = {
 headers : new HttpHeaders({
   'Content-Type':'application/json',
 }), 

};

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 
private readonly apiUrl = 'http://localhost:51758/api';
readonly photoUrl = 'http://localhost:51758/Photos/';
  constructor(private http:HttpClient) { 
  }
  
  getDepList():Observable<DepartmentList[]>{
    return this.http.get<DepartmentList[]>(this.apiUrl+'/Department');
  }

  addDepartment(val:any){
    return this.http.post<any>(this.apiUrl+'/Department',val);
  }

  updateDepartment(val:any){
    debugger
    return this.http.put<any>(this.apiUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    return this.http.delete<any>(this.apiUrl+'/Department/'+ val);
  }


  getEmpList():Observable<any[]>{
    debugger
    const url = this.apiUrl+ '/Employee';
    return this.http.get<any[]>(this.apiUrl+'/Employee');
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
    debugger
    return this.http.post(this.apiUrl+'/Employee/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl+'/Employee/GetAllDepartmentNames');
  }

}
