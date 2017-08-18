import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../service/employee.service';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers :[EmployeeService]
})
export class EmployeeComponent implements OnInit {

  allocationDetails = {};
  constructor(private empService : EmployeeService,private authService:AuthenticationService) {
    this.allocationDetails = this.empService.getMyAllocationDetails('rajesh');
   }

  ngOnInit() {
    
  }
  getCurrentUser(){
    return this.authService.getLoggedInUsername()
  }

}
