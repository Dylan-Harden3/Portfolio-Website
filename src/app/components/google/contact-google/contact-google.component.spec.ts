import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactGoogleComponent } from './contact-google.component';

describe('ContactGoogleComponent', () => {
  let component: ContactGoogleComponent;
  let fixture: ComponentFixture<ContactGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactGoogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
