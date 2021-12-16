import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsGoogleComponent } from './projects-google.component';

describe('ProjectsGoogleComponent', () => {
  let component: ProjectsGoogleComponent;
  let fixture: ComponentFixture<ProjectsGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsGoogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
