import {Injectable} from '@angular/core';

import {assetList} from './mock-assets';

@Injectable()
export class EmployeeService{
    allAssets = [];
    allocationDetails = {
        myAssets : [],
        currentAsset : null
    };

    getMyAllocationDetails(userId:string){
        this.allAssets = assetList;
        this.allAssets.forEach(element => {
            if(element.assignedTo && element.assignedTo.userId === userId){
                this.allocationDetails.currentAsset = element;
            }
            if(element.allocationHistory.indexOf(userId)!== -1){
                this.allocationDetails.myAssets.push(element);
            }
        });
        return this.allocationDetails;
    }
}
