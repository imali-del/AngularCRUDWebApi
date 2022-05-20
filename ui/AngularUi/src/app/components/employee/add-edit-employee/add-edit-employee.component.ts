import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {
  
  @Input() emp : any;
  EmployeeId!:string;
  EmployeeName!:string;
  Department!:string;
  DateOfJoining!:string;
  PhotoFileName!:string;
  PhotoFilePath!:string;

  DepartmentsList:any[]=[];

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.departmentList();
  }

  departmentList(){
    debugger
    this.sharedService.getAllDepartmentNames().subscribe((data) => {
      debugger
      this.DepartmentsList = data;
      this.EmployeeId = this.emp.EmployeeId;
      this.EmployeeName = this.emp.EmployeeName;
      this.Department = this.emp.Department;
      this.DateOfJoining = this.emp.DateOfJoining;
      this.PhotoFileName = this.emp.PhotoFileName;
      this.PhotoFilePath = this.sharedService.photoUrl+this.PhotoFileName;
    });
  }

  addEmployee(){
    let val = {
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      DateOfJoining:this.DateOfJoining,
      PhotoFileName:this.PhotoFileName
     };

     this.sharedService.addEmployee(val).subscribe((response)=> alert("Employee Added Succesfully"));

  }
  updateEmployee()
  {
    let val = {
      EmployeeId:this.EmployeeId,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      DateOfJoining:this.DateOfJoining,
      PhotoFileName:this.PhotoFileName
     };

     this.sharedService.updateEmployee(val).subscribe((response)=> alert("Employee Updated Succesfully"));
  }

  uploadPhoto(event:any){
    var file = event.target.files[0];
    const formData:FormData = new FormData();
    formData.append('uploadedFile',file,file.name);
    this.sharedService.UploadPhoto(formData).subscribe((data)=> {
      debugger
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.sharedService.photoUrl+this.PhotoFileName;
    });
    
  }
}
