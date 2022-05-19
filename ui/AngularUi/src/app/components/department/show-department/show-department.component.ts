import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { DepartmentList } from '../Department';

@Component({
  selector: 'app-show-department',
  templateUrl: './show-department.component.html',
  styleUrls: ['./show-department.component.css']
})
export class ShowDepartmentComponent implements OnInit {

  DepartmentList:DepartmentList[] = [];
  ModalTitle!:string;
  dep:any;
  ActivateAddEditDepComp:boolean= false;
  
  constructor(private sharedService:SharedService) {
  //   this.subscription = this.addEditComponent.closeModelwindow().subscribe((response) => {
  //     if(response)
  //     {
  //     this.closeClick();
  //     };
  // });
   }
  
  ngOnInit(): void {
    this.refereshDeptList();

  }
  
  refereshDeptList(){
    this.sharedService.getDepList().subscribe((data) => this.DepartmentList = data);
  }

  addClick(){
    debugger
    this.dep = {
      DepartmentId:0,
      DepartmentName:""
    };
    this.ModalTitle = "Add Department";
    this.ActivateAddEditDepComp = true;
    
  }
  
  editClick(item:any){
    debugger
    this.dep = item
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditDepComp = true;
  }

  deleteClick(item:any){
   this.sharedService.deleteDepartment(item.DepartmentId).subscribe((response) => {
    alert(response); 
    this.refereshDeptList();
  });
   
  }

  closeClick(){
    this.ActivateAddEditDepComp = false;
    this.refereshDeptList();
  }
}
