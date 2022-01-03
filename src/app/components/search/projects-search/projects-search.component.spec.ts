import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsSearchComponent } from './projects-search.component';

describe('ProjectsSearchComponent', () => {
  let component: ProjectsSearchComponent;
  let fixture: ComponentFixture<ProjectsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
