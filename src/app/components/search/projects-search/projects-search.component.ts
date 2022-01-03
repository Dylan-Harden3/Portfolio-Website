import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-search',
  templateUrl: './projects-search.component.html',
  styleUrls: ['./projects-search.component.css']
})
export class ProjectsSearchComponent implements OnInit {

  selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleThemes() {
    this.selected = !this.selected;
  }

}
