import { IStudent } from "./student";

export class IFee{
    id: number;
    student: IStudent;
    feeDue: number;
    feePaid: number;
    totalFee: number;
}