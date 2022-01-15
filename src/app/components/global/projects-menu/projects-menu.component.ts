import { Component, OnInit } from '@angular/core';

interface project {
  title : string,
  img : string,
  description: string,
  technologies: string,
  selected : boolean
}

@Component({
  selector: 'app-projects-menu',
  templateUrl: './projects-menu.component.html',
  styleUrls: ['./projects-menu.component.css']
})
export class ProjectsMenuComponent implements OnInit {

  toggleSelected(projectIdx : number): void {

    this.projects.forEach((project, idx) => {

      if(idx != projectIdx) {

        project.selected = false;

      }

    })

    this.projects[projectIdx].selected = !this.projects[projectIdx].selected;

    if (this.projects[projectIdx].selected) {

      this.displayedProject = this.projects[projectIdx];

    } else {

      this.displayedProject.selected = false;

    }

  }

  public projects: project[] =
    [ {
    title : "TravelEZ Travel App", img : "../../../../assets/images/global/logoAP.PNG", description : "Travel agency app which allows users to search for hotels, flights, or destinations.", technologies: "HTML/CSS, Bootstrap, Nodejs, Express",selected : false
      },
      {
        title : "Mock Streaming Database", img : "../../../../assets/images/global/database.png", description : "Database from streaming company data with a java swing GUI to display trends.", technologies: "Java, PostgreSQL",selected : false
      },
      {
        title : "Personal Website", img : "../../../../assets/images/global/newwebsite.png", description : "Portfolio website with 4 themes to showcase skills.", technologies: "Angular, TypeScript, Bootstrap", selected : false
      },
      {
        title : "Connect Four Game", img : "../../../../assets/images/global/connectfour.png", description : "Connect Four Game using vanilla HTML/CSS and JavaScript", technologies: "HTML/CSS, JavaScript", selected : false
      },
      {
        title : "To Do List", img : "../../../../assets/images/global/todo.png", description : "To do list with add, delete and filter functionality.", technologies: "Bootstrap, JavaScript",selected : false
      },
      {
        title : "Personal Website v1", img : "../../../../assets/images/global/oldwebsite.png", description : "Personal website to showcase basic front end skills.", technologies: "HTML/CSS, Bootstrap",selected : false
      }
    ]

    public displayedProject = {
      title : "",
      img : "",
      description : "",
      technologies : "",
      selected : false
    }

  constructor() { }

  ngOnInit(): void {
  }

}
