import { IStudent } from "./student";

export class IDiary {
    id: number;
    student: IStudent;
    generatedDate: Date;
    remark: string;
}