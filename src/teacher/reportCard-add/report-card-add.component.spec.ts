import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCardAddComponent } from './report-card-add.component';

describe('ReportCardAddComponent', () => {
  let component: ReportCardAddComponent;
  let fixture: ComponentFixture<ReportCardAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportCardAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
