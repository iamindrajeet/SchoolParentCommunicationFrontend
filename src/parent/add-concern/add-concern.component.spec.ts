import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConcernComponent } from './add-concern.component';

describe('AddConcernComponent', () => {
  let component: AddConcernComponent;
  let fixture: ComponentFixture<AddConcernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConcernComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConcernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
