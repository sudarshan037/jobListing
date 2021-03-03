import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSearchItemComponent } from './job-search-item.component';

describe('JobSearchItemComponent', () => {
  let component: JobSearchItemComponent;
  let fixture: ComponentFixture<JobSearchItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSearchItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSearchItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
