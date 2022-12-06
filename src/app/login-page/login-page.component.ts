import { Component, OnInit } from '@angular/core';
import { ICredentials } from 'src/models/credentials';
import { LoginServiceService } from 'src/services/login-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }
  //public credentials:ICredentials;
  constructor(private loginService:LoginServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.credentials.username);
    console.log(this.credentials.password);
    
    //console.log(" form is submitted ");
    if((this.credentials.username!='' && this.credentials.password!='')&& (this.credentials.username!=null && this.credentials.password!=null))
    {
        console.log("we have to submit the form to server");
        console.log(this.credentials);
        // this.loginService.generateToken(this.credentials).subscribe(
        //   (response:any)=>{
        //     console.log(response.token);
        //     this.loginService.loginUser(response.token);
        //     if(this.credentials.username==="admin@admin.com" && this.credentials.password==="admin"){window.location.href="/admin/dashboard"}
        //      else if(this.credentials.username==="accountant@accountant.com" &&this.credentials.password==="accountant"){window.location.href="/accountant/dashboard"}
        //      else if(this.credentials.username==="parent@parent.com" &&this.credentials.password==="parent"){window.location.href="/parent/dashboard"}
        //      else if(this.credentials.username==="teacher@teacher.com" &&this.credentnials.password==="teacher"){window.location.href="/teacher/dashboard"}
        //      else window.location.href="/"
        //   },
        //   error=>{
        //     console.log(error);
        //   }
        // )
        if(this.credentials.username==="admin@admin.com" && this.credentials.password==="admin")
        {
          this.loginService.generateToken(this.credentials).subscribe(
            (response:any)=>{
              console.log(response.token);
              this.loginService.loginUser(response.token);
              window.location.href="/admin/dashboard"
            },
            error=>{
              console.log(error);
            }
          )
        }
        else if(this.credentials.username==="accountant@accountant.com" && this.credentials.password==="accountant")
        {
          this.loginService.generateToken(this.credentials).subscribe(
            (response:any)=>{
              console.log(response.token);
              this.loginService.loginUser(response.token);
              window.location.href="/accountant/dashboard"
            },
            error=>{
              console.log(error);
            }
          )
        }
        else if(this.credentials.username==="parent@parent.com" && this.credentials.password==="parent")
        {
          this.loginService.generateToken(this.credentials).subscribe(
            (response:any)=>{
              console.log(response.token);
              this.loginService.loginUser(response.token);
              window.location.href="/parent/dashboard"
            },
            error=>{
              console.log(error);
            }
          )
        }
        else if(this.credentials.username==="teacher@teacher.com" && this.credentials.password==="teacher")
        {
          this.loginService.generateToken(this.credentials).subscribe(
            (response:any)=>{
              console.log(response.token);
              this.loginService.loginUser(response.token);
              window.location.href="/teacher/dashboard"
            },
            error=>{
              console.log(error);
            }
          )
        }
        else
        {
          console.log("Wrong credentials");
            if(this.credentials.password!="teacher" || (this.credentials.username!="teacher@teacher.com" && this.credentials.username!="admin@admin.com" && this.credentials.username!="parent@parent.com" && this.credentials.username!="accountant@accountant.com"))
            {
              if(this.credentials.username==="teacher@teacher.com" && this.credentials.password!="teacher")
              {
                console.log("wrong teacher password")
                Swal.fire('Error','wrong password','error');
              }
              else if(this.credentials.username!=="teacher@teacher.com" && this.credentials.password==="teacher")
              {
                console.log("wrong teacher username")
                Swal.fire('Error','wrong username','error');
              }
              else
              {
                console.log("wrong credentials")
                // window.location.href="/"
              }
            }
            if(this.credentials.password!="admin" || (this.credentials.username!="admin@admin.com" && this.credentials.username!="teacher@teacher.com" && this.credentials.username!="parent@parent.com" && this.credentials.username!="accountant@accountant.com"))
            {
              if(this.credentials.username==="admin@admin.com" && this.credentials.password!="admin")
              {
                console.log("wrong admin password")
                Swal.fire('Error','wrong password','error');
              }
              else if(this.credentials.username!=="admin@admin.com" && this.credentials.password==="admin")
              {
                console.log("wrong admin username")
                Swal.fire('Error','wrong username','error');
              }
              else
              {
                console.log("wrong credentials")
                //window.location.href="/"
              }
              //window.location.href="/login/admin"
            }
            if(this.credentials.password!="parent" || (this.credentials.username!="parent@parent.com" && this.credentials.username!="teacher@teacher.com" && this.credentials.username!="admin@admin.com" && this.credentials.username!="accountant@accountant.com"))
            {
              if(this.credentials.username==="parent@parent.com" && this.credentials.password!="parent")
              {
                console.log("wrong parent password")
                Swal.fire('Error','wrong password','error');
              }
              else if(this.credentials.username!=="parent@parent.com" && this.credentials.password==="parent")
              {
                console.log("wrong parent username")
                Swal.fire('Error','wrong username','error');
              }
              else
              {
                console.log("wrong credentials")
               // window.location.href="/"
              }
              //window.location.href="/login/parent"
             }
            if(this.credentials.password!="accountant" || (this.credentials.username!="accountant@accountant.com" && this.credentials.username!="teacher@teacher.com" && this.credentials.username!="admin@admin.com" && this.credentials.username!="parent@parent.com"))
            {
              if(this.credentials.username==="accountant@accountant.com" && this.credentials.password!="accountant")
              {
                console.log("wrong accountant password")
                Swal.fire('Error','wrong password','error');
              }
              else if(this.credentials.username!=="accountant@accountant.com" && this.credentials.password==="accountant")
              {
                console.log("wrong accountant username")
                Swal.fire('Error','wrong username','error');
              }
              else
              {
                console.log("wrong credentials")
                //window.location.href="/"
              }
              //window.location.href="/login/accountant"
            }
        }
        //subscribe(Response=>{{console.log("response")}},error=>{{console.log("error")}})
    }
    else
    {
      console.log("fields are empty");
      window.location.href="/"
    }
  }
}
 
 


// if(this.credentials.username==="admin@admin.com"){window.location.href="/admin/dashboard"}
// else if(this.credentials.username==="accountant@accountant.com"){window.location.href="/accountant/dashboard"}
// else if(this.credentials.username==="parent@parent.com"){window.location.href="/parent/dashboard"}
// else if(this.credentials.username==="teacher@teacher.com"){window.location.href="/teacher/dashboard"}
// else window.location.href="/"