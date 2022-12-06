import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountantComponent } from './accountant-component/accountant.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FeeAddComponent } from './fee-add/fee-add.component';
import { FeeUpdateComponent } from './fee-update/fee-update.component';


@NgModule({
  declarations: [
    AccountantComponent,
    FeeAddComponent,
    FeeUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path:'accountant', component:AccountantComponent },
      { path:'accountant/feeAdd', component:FeeAddComponent },
      { path:'accountant/feeUpdate', component:FeeUpdateComponent },

    ])
  ]
})
export class AccountantModule { }
