import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleThemes() {
    this.selected = !this.selected;
  }

}
