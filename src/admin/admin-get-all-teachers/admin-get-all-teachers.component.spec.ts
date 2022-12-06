import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetAllTeachersComponent } from './admin-get-all-teachers.component';

describe('AdminGetAllTeachersComponent', () => {
  let component: AdminGetAllTeachersComponent;
  let fixture: ComponentFixture<AdminGetAllTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetAllTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetAllTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
