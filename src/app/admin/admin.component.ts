import { Component, OnInit } from '@angular/core';

import {AdminService} from '../service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers : [AdminService]
})
export class AdminComponent implements OnInit {

  allAssets = [];
  editRowId: any;
  allEmployees;
  constructor(private adminService:AdminService) { 
    this.allAssets = adminService.getAllAssets();
    this.allEmployees = this.adminService.getAllEmployees();
  }

  ngOnInit() {
  }
  removeAsset(index){
    this.adminService.removeAsset(index);
    this.allAssets.splice(index,1);
  }
  toggle(asset){
    this.editRowId = asset.id;
  }
  update(index){
    let updatedAsset = this.allAssets[index];
    // update allocation history if it is not assigned again to the same user
    if(updatedAsset.allocationHistory[updatedAsset.allocationHistory.length-1]!=updatedAsset.assignedTo.userId){
      this.allAssets[index].allocationHistory.push(updatedAsset.assignedTo.userId);
    }
    // update the asset in the server
    this.adminService.updateAsset(updatedAsset,index)
    this.editRowId = null;
  }

}
