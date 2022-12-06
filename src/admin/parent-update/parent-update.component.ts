import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IParent } from 'src/models/parent';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-parent-update',
  templateUrl: './parent-update.component.html',
  styleUrls: ['./parent-update.component.css']
})
export class ParentUpdateComponent implements OnInit {
  
  parent: IParent = new IParent();
  sId:number[];
  studentId:string;
  submitted:boolean;


  constructor(private adminService:AdminService,private fb:FormBuilder) { 
  }
  ngOnInit(){
    this.submitted=false;
  }

  parentForm = new FormGroup({
    parent_name:new FormControl('' , [Validators.required, Validators.minLength(5) ] ),
    parent_contact:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    parent_id:new FormControl('',[Validators.required]),
    students:this.fb.array([]),
  });
  
  saveParent(saveParent){
    this.parent=new IParent();   
    this.parent.name=this.ParentName.value;
    this.parent.contact=this.ParentContact.value;
    this.parent.id=this.ParentId.value;
    this.sId = this.student_id.value;
    this.studentId= this.sId.toString();
    this.submitted = true;
    this.onUpdateParent();
  }

  get ParentName(){
    return this.parentForm.get('parent_name');
  }

  get ParentContact(){
    return this.parentForm.get('parent_contact');
  }

  get ParentId(){
    return this.parentForm.get('parent_id');
  }
 
  getControls() {
    return (this.parentForm.get('students') as FormArray).controls;
  }
  get student_id() : FormArray {
    return this.parentForm.get("students") as FormArray
  }
 
  onAddId() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.parentForm.get('students')).push(control);
  }
 
  addParentForm(){
    this.submitted=false;
    this.parentForm.reset();
  }
  

  onUpdateParent():void{
    this.adminService.updateParentDetails(this.parent,this.studentId).subscribe();
    console.log(this.parent);
    this.parent=new IParent();
  }
}
