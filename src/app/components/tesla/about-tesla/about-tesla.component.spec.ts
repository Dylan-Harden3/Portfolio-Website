import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTeslaComponent } from './about-tesla.component';

describe('AboutTeslaComponent', () => {
  let component: AboutTeslaComponent;
  let fixture: ComponentFixture<AboutTeslaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTeslaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTeslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
