import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTeslaComponent } from './skills-tesla.component';

describe('SkillsTeslaComponent', () => {
  let component: SkillsTeslaComponent;
  let fixture: ComponentFixture<SkillsTeslaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsTeslaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsTeslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
