import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {
  
  EmployeeList:any[] = [];
  ModalTitle!:string
  emp:any;
  ActivateAddEditEmpComp:boolean = false;
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.showEmpList();
  }
   
  showEmpList() {
    this.sharedService.getEmpList().subscribe((data) => this.EmployeeList = data);
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Department:"",
      DateOfJoining:"",
      PhotoFileName:"anonymous.png"
    }
    this.ModalTitle = "Add Employee";
    this.ActivateAddEditEmpComp = true;
  }
  
  editClick(item:any){
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;
  }
  
  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.sharedService.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.showEmpList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp = false;
    this.showEmpList();
  }
}
