import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {
  
  @Input() emp : any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
