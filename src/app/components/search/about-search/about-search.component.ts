import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-search',
  templateUrl: './about-search.component.html',
  styleUrls: ['./about-search.component.css']
})
export class AboutSearchComponent implements OnInit {

  selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleThemes() {
    this.selected = !this.selected;
  }

}
