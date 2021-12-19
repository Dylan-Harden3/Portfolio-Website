import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNetflixComponent } from './contact-netflix.component';

describe('ContactNetflixComponent', () => {
  let component: ContactNetflixComponent;
  let fixture: ComponentFixture<ContactNetflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactNetflixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactNetflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
