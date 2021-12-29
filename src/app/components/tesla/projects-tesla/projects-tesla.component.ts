import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-tesla',
  templateUrl: './projects-tesla.component.html',
  styleUrls: ['./projects-tesla.component.css']
})
export class ProjectsTeslaComponent implements OnInit {

  images = ['assets/images/global/image.png','assets/images/global/database.png','assets/images/global/newwebsite.png','assets/images/global/oldwebsite.png'];

  constructor() { }

  ngOnInit(): void {
  }

}
