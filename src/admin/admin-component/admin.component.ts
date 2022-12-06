import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onClickTeacher() {
    this.router.navigate(['admin/getAllTeachers']);
  }

  onClickParent() {
    this.router.navigate(['admin/getAllParents']);
  }
}
