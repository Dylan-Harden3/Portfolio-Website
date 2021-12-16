import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGoogleComponent } from './about-google.component';

describe('AboutGoogleComponent', () => {
  let component: AboutGoogleComponent;
  let fixture: ComponentFixture<AboutGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutGoogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
