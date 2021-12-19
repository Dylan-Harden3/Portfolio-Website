import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNetflixComponent } from './about-netflix.component';

describe('AboutNetflixComponent', () => {
  let component: AboutNetflixComponent;
  let fixture: ComponentFixture<AboutNetflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutNetflixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNetflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
