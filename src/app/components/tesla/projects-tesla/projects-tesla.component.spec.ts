import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTeslaComponent } from './projects-tesla.component';

describe('ProjectsTeslaComponent', () => {
  let component: ProjectsTeslaComponent;
  let fixture: ComponentFixture<ProjectsTeslaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsTeslaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsTeslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
