import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-search',
  templateUrl: './skills-search.component.html',
  styleUrls: ['./skills-search.component.css']
})
export class SkillsSearchComponent implements OnInit {

  selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleThemes() {
    this.selected = !this.selected;
  }

}
