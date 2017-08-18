import {Hardware} from '../models/hardware';
import {emp1,emp2,emp3} from './mock-employees';

export let asset1: Hardware = {
        id: 1,
        name : 'Monitor',
        type:'Output Hardware',
        assignedTo:emp1,
        actualCost:10000,
        totalRepairCost:500,
        allocationHistory:[emp1.userId]
}

export let asset2: Hardware = {
        id: 2,
        name : 'CPU',
        type:'Processing Hardware',
        assignedTo:emp2,
        actualCost:10000,
        totalRepairCost:500,
        allocationHistory:[emp1.userId,emp2.userId]
}

export let asset3: Hardware = {
        id: 3,
        name : 'Hard Disk',
        type:'Storage Hardware',
        assignedTo:emp3,
        actualCost:10000,
        totalRepairCost:500,
        allocationHistory:[emp3.userId]
}

export const assetList:Hardware[] = [
    asset1,
    asset2,
    asset3
]
