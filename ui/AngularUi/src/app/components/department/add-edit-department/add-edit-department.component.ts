import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.css']
})
export class AddEditDepartmentComponent implements OnInit {

@Input() dep:any;
DepartmentId!:number;
DepartmentName!:string;
closeModel:boolean = false;
  constructor(private sharedService : SharedService) { }

  ngOnInit(): void {
  debugger
  this.DepartmentId = this.dep.DepartmentId;
  this.DepartmentName = this.dep.DepartmentName;
  }

  addDepartment(){
    let val = {
      DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName
    };

    this.sharedService.addDepartment(val).subscribe((response) => alert(response));
  }

  updateDepartment(){
    debugger
    let val = {
      DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName
    };

    this.sharedService.updateDepartment(val).subscribe((response) => alert(response));
    
  }

}
