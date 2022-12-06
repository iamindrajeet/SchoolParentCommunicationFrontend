import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcernUpdateComponent } from './concern-update.component';

describe('ConcernUpdateComponent', () => {
  let component: ConcernUpdateComponent;
  let fixture: ComponentFixture<ConcernUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcernUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcernUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
