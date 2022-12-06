import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyDiaryAddComponent } from './daily-diary-add.component';

describe('DailyDiaryAddComponent', () => {
  let component: DailyDiaryAddComponent;
  let fixture: ComponentFixture<DailyDiaryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyDiaryAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyDiaryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
