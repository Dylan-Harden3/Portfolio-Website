import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSearchComponent } from './about-search.component';

describe('AboutSearchComponent', () => {
  let component: AboutSearchComponent;
  let fixture: ComponentFixture<AboutSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
