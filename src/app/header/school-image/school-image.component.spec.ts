import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolImageComponent } from './school-image.component';

describe('SchoolImageComponent', () => {
  let component: SchoolImageComponent;
  let fixture: ComponentFixture<SchoolImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
