import { HttpClient } from '@angular/common/http';
import { typeSourceSpan } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  url="http://localhost:8090"
  constructor(private http:HttpClient) { }


   generateToken(credentials:any){
     console.log("generate token is called");
     console.log(credentials)
     console.log(this.http.post(`${this.url}/login`,credentials));

     if(credentials.username==="admin@admin.com" ){return this.http.post(`${this.url}/login`,credentials);}
           else if(credentials.username==="accountant@accountant.com"){return this.http.post(`${this.url}/login/accountant`,credentials);}
           else if(credentials.username==="parent@parent.com"){return this.http.post(`${this.url}/login/parent`,credentials);}
           else if(credentials.username==="teacher@teacher.com"){return this.http.post(`${this.url}/login/teacher`,credentials);}
           else window.location.href="/"
    return this.http.post(`${this.url}/login`,credentials);
  }



  //or login user
  loginUser(token)
  {
    localStorage.setItem("token",token);
    return true;
  }


  isloggedIn()
  {
    let token=localStorage.getItem("token");
    if(token == undefined || token === '' || token == null)
    {
      console.log("not null");
      return false;
    }
    else
    {
      return true;
    }
  }

  
  logout()
  {
    localStorage.removeItem('token');
    return true;
  }

  getToken()
  {
    return localStorage.getItem("token");
  }

}
