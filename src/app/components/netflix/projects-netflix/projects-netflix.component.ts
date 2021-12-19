import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-netflix',
  templateUrl: './projects-netflix.component.html',
  styleUrls: ['./projects-netflix.component.css']
})
export class ProjectsNetflixComponent implements OnInit {

  images = ['assets/images/global/image.png','assets/images/global/database.png','assets/images/global/newwebsite.png','assets/images/global/oldwebsite.png'];

  constructor() { }

  ngOnInit(): void {
  }

}
