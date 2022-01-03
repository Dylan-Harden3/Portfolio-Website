import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-search',
  templateUrl: './education-search.component.html',
  styleUrls: ['./education-search.component.css']
})
export class EducationSearchComponent implements OnInit {

  selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleThemes() {
    this.selected = !this.selected;
  }

}
