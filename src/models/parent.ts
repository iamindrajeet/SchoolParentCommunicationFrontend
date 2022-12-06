import { IConcern } from "./concern";
import { IStudent } from "./student";

export class IParent{
    id:number;
    student:IStudent[];
    name:string;
    contact:number;
    concern:IConcern[];
}