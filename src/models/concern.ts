import { concernType } from "./concernType";
import { IParent } from "./parent";

export class IConcern{
    id:number;
    concern:String;
    isResolved:boolean;
    concernType:concernType;
    parent:IParent;
}