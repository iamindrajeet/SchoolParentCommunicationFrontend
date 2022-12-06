import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IFee } from 'src/models/fee';
import { AccountantService } from 'src/services/accountant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fee-update',
  templateUrl: './fee-update.component.html',
  styleUrls: ['./fee-update.component.css']
})
export class FeeUpdateComponent implements OnInit {

  fee: IFee = new IFee;
  student: string;

  constructor(private accountantService: AccountantService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public updateFee(form:NgForm){ 
      this.accountantService.updateFeeDetails(this.fee, this.student).subscribe(()=>{
        Swal.fire('Success','Fee Updated','success');
      });  
      
  }

   

}
