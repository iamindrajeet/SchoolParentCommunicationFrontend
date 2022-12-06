import { Component, OnInit } from '@angular/core';
import { IConcern } from 'src/models/concern';
import Swal from 'sweetalert2';  
import { ParentService } from 'src/services/parent.service';

@Component({
  selector: 'app-add-concern',
  templateUrl: './add-concern.component.html',
  styleUrls: ['./add-concern.component.css']
})
export class AddConcernComponent implements OnInit {

  pId: string;
  concern: IConcern = new IConcern();
  concern_output:IConcern = new IConcern();

  constructor(private parentService: ParentService) { }

  ngOnInit(): void {
    this.concern.concern = localStorage.getItem('concern');
    this.concern.concernType = JSON.parse(localStorage.getItem('concernType'));
    this.pId = localStorage.getItem('parentID');
    this.onAddConcern();
  }

  onAddConcern() {
    console.log(this.concern);
    this.parentService.addConcern(this.concern, this.pId).subscribe({
      next:concern_output=>{
        this.concern_output=concern_output;
        console.log(concern_output);
      },
      error: err =>{
        console.log(err);
        Swal.fire("Error","Fields are invalid", "error");
        
      }
    });
    Swal.fire('Success','Concern Added Successfully','success');
  }

}
