import { IAttendance } from "./attendance";
import { IDiary } from "./diary";
import { IFee } from "./fee";
import { IParent } from "./parent";
import { IReportCard } from "./reportCard";

import { IStandard } from "./standard";

export class IStudent{
    id:number;
    name:string;
    parent:IParent;
    diary:IDiary;
    standard:IStandard;
    attendance:IAttendance;
    fee:IFee;
    reportCard:IReportCard;
}