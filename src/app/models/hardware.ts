import {Employee} from './employee';

export class Hardware {
    id: number;
    name : string;
    allocationHistory:[string];
    type:string;
    assignedTo:Employee;
    actualCost:number;
    totalRepairCost:number;
}