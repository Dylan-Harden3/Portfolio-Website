import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsNetflixComponent } from './projects-netflix.component';

describe('ProjectsNetflixComponent', () => {
  let component: ProjectsNetflixComponent;
  let fixture: ComponentFixture<ProjectsNetflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsNetflixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsNetflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
