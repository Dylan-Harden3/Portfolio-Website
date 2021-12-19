import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroNetflixComponent } from './hero-netflix.component';

describe('HeroNetflixComponent', () => {
  let component: HeroNetflixComponent;
  let fixture: ComponentFixture<HeroNetflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroNetflixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroNetflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
