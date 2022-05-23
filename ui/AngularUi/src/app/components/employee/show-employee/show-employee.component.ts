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

  EmployeeIdFilter : string = '';
  EmployeeNameFilter : string = '';
  EmployeeListWithoutFilter:any[] = [];

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.showEmpList();
  }
   
  showEmpList() {
    this.sharedService.getEmpList().subscribe((data) => {
      debugger
      this.EmployeeList = data;
      this.EmployeeListWithoutFilter = data;
    });
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

  filterFn(){
    debugger
    var EmployeeIdFilter = this.EmployeeIdFilter;
    var EmployeeNameFilter = this.EmployeeNameFilter;

    this.EmployeeList = this.EmployeeListWithoutFilter.filter(function (el){
      return el.EmployeeId.toString().toLowerCase().includes(
        EmployeeIdFilter.toString().trim().toLowerCase()
      )&&
      el.EmployeeName.toString().toLowerCase().includes(
        EmployeeNameFilter.toString().trim().toLowerCase()
      )
  });

  }

  sortResult(prop : string,asc: boolean){
    this.EmployeeList = this.EmployeeListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    });
  }
}
