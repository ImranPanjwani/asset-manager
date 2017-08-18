import {Injectable} from '@angular/core';

import {assetList} from './mock-assets';
import {employeeList} from './mock-employees';
@Injectable()
export class AdminService{

    assetList;
    employees;
    // initializing the mock data
    constructor(){
        this.assetList = assetList;
        this.employees = employeeList.map((employee)=>{
            return employee.name;
        });

    }

    getAllAssets(){
        return this.assetList;
    }
    getAllEmployees(){
        return this.employees;
    }
    updateAsset(updatedAsset,index){
        this.assetList.splice(index,1,updatedAsset);
    }
    removeAsset(index){
        this.assetList.splice(index,1);
    }

}
