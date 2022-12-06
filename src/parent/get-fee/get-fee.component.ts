import { Component, OnInit } from '@angular/core';
import { IFee } from 'src/models/fee';
import { ParentService } from 'src/services/parent.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-fee',
  templateUrl: './get-fee.component.html',
  styleUrls: ['./get-fee.component.css']
})
export class GetFeeComponent implements OnInit {

  // public fee !: IFee;
  fee: IFee = new IFee();
  sId: number;

  constructor(private parentService: ParentService) { }

  ngOnInit(): void {
    this.sId = parseInt(localStorage.getItem("studentID"));
    this.getFee();
  }

  getFee(): void {
    this.parentService.getFee(this.sId).subscribe({
      next: fee => {
        this.fee = fee;
        console.log(fee);

      },
      error: err => {
        console.log(err)
        Swal.fire("Error", "Student id is invalid", "error");
      }

    });
  }

}
