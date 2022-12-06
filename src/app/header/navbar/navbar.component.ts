import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/services/login-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   show=localStorage.getItem('token');
  constructor(private logInService:LoginServiceService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.logInService.logout();
    this.show=localStorage.getItem('token');
    Swal.fire('Success','Logged Out Successfully','success');
  }
}
