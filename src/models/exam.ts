import { IStandard } from "./standard";
import { subject } from "./subject";

export class IExam {
    id: number;
    examDate: Date;
    subject: subject;
    standard: IStandard[];
    duration: string;
    marks: number;
}