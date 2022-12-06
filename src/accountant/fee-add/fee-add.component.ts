import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IFee } from 'src/models/fee';
import { AccountantService } from 'src/services/accountant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fee-add',
  templateUrl: './fee-add.component.html',
  styleUrls: ['./fee-add.component.css']
})
export class FeeAddComponent implements OnInit {

  fee: IFee = new IFee();
  fee_output: IFee = new IFee();
  student: string;
  constructor(private accountantService : AccountantService,
              private router: Router) { }

  ngOnInit(): void {
  }
 

  public addFee(form:NgForm){
    this.accountantService.addFeeDetails(this.fee, this.student).subscribe({
      next: fee_output=>{
        this.fee_output=fee_output;
        Swal.fire('Success',`Fee Added with id ${this.fee_output.id}`,'success');
      }
    });
    form.reset();
  }

  
}
