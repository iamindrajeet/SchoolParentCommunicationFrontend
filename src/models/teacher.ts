import { IStandard } from "./standard";
import { subject } from "./subject";

export class ITeacher {
    id:number;
    name:string;
    standard:IStandard;
    standardList:IStandard[];
    subject : subject;
}

