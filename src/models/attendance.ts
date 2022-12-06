import { IStudent } from "./student";

export class IAttendance{
    id: number;
    student: IStudent;
    attendanceDate: Date;
    present: boolean;
}