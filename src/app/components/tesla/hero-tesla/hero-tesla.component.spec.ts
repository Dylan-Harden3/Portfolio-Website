import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTeslaComponent } from './hero-tesla.component';

describe('HeroTeslaComponent', () => {
  let component: HeroTeslaComponent;
  let fixture: ComponentFixture<HeroTeslaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTeslaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTeslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
