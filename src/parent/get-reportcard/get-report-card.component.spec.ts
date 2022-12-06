import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetReportCardComponent } from './get-report-card.component';

describe('GetReportCardComponent', () => {
  let component: GetReportCardComponent;
  let fixture: ComponentFixture<GetReportCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetReportCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetReportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
