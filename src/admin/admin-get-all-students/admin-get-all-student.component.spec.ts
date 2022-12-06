import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetAllStudentComponent } from './admin-get-all-student.component';

describe('AdminGetAllStudentComponent', () => {
  let component: AdminGetAllStudentComponent;
  let fixture: ComponentFixture<AdminGetAllStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetAllStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetAllStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
