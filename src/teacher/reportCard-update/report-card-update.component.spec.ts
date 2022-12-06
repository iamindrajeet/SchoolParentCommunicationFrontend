import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCardUpdateComponent } from './report-card-update.component';

describe('ReportCardUpdateComponent', () => {
  let component: ReportCardUpdateComponent;
  let fixture: ComponentFixture<ReportCardUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCardUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCardUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
