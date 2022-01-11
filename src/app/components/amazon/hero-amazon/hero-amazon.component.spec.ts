import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAmazonComponent } from './hero-amazon.component';

describe('HeroAmazonComponent', () => {
  let component: HeroAmazonComponent;
  let fixture: ComponentFixture<HeroAmazonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroAmazonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroAmazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
