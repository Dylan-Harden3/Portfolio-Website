import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTeslaComponent } from './footer-tesla.component';

describe('FooterTeslaComponent', () => {
  let component: FooterTeslaComponent;
  let fixture: ComponentFixture<FooterTeslaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterTeslaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTeslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
