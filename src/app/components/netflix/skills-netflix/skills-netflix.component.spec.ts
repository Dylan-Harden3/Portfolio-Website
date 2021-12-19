import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsNetflixComponent } from './skills-netflix.component';

describe('SkillsNetflixComponent', () => {
  let component: SkillsNetflixComponent;
  let fixture: ComponentFixture<SkillsNetflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsNetflixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsNetflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
