import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroGoogleComponent } from './hero-google.component';

describe('HeroGoogleComponent', () => {
  let component: HeroGoogleComponent;
  let fixture: ComponentFixture<HeroGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroGoogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
