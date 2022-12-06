import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IParent } from 'src/models/parent';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-admin-get-all-parents',
  templateUrl: './admin-get-all-parents.component.html',
  styleUrls: ['./admin-get-all-parents.component.css']
})
export class AdminGetAllParentsComponent implements OnInit {

  public parents: IParent[] = [];

  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {
    this.getParents();
  }

  public getParents(): void {
    this.adminService.getAllParent().subscribe({
      next: parents => {
        this.parents = parents;
      },
      error: err => console.log(err)
    });
  }

  onBack(): void {
    this.router.navigate(['/admin']);
  }
}
