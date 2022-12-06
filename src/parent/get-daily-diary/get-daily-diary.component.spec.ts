import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDailyDiaryComponent } from './get-daily-diary.component';

describe('GetDailyDiaryComponent', () => {
  let component: GetDailyDiaryComponent;
  let fixture: ComponentFixture<GetDailyDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDailyDiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDailyDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
