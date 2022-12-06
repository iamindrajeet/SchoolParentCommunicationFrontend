import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountantService } from 'src/services/accountant.service';

@Component({
  selector: 'app-accountant',
  templateUrl: './accountant.component.html',
  styleUrls: ['./accountant.component.css']
})
export class AccountantComponent implements OnInit {
 
   constructor(private accountantService: AccountantService, 
              private router: Router) { }


  ngOnInit(): void {

  }

  onClickFeeAdd(){
    this.router.navigate(['accountant/feeAdd']);
  }

  onClickFeeUpdate(){
    this.router.navigate(['accountant/feeUpdate']);
  }

}
