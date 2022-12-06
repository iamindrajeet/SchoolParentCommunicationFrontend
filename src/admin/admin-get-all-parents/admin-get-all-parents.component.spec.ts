import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetAllParentsComponent } from './admin-get-all-parents.component';

describe('AdminGetAllParentsComponent', () => {
  let component: AdminGetAllParentsComponent;
  let fixture: ComponentFixture<AdminGetAllParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetAllParentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetAllParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
