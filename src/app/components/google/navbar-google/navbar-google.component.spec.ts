import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarGoogleComponent } from './navbar-google.component';

describe('NavbarGoogleComponent', () => {
  let component: NavbarGoogleComponent;
  let fixture: ComponentFixture<NavbarGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarGoogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
