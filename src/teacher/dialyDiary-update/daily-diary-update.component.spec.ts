import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDiaryUpdateComponent } from './daily-diary-update.component';

describe('DailyDiaryUpdateComponent', () => {
  let component: DailyDiaryUpdateComponent;
  let fixture: ComponentFixture<DailyDiaryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyDiaryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyDiaryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
