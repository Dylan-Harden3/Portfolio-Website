import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarGoogleComponent } from './components/google/navbar-google/navbar-google.component';
import { HeroGoogleComponent } from './components/google/hero-google/hero-google.component';
import { AboutGoogleComponent } from './components/google/about-google/about-google.component';
import { TeslaComponent } from './components/tesla/tesla.component';
import { ProjectsGoogleComponent } from './components/google/projects-google/projects-google.component';
import { ContactGoogleComponent } from './components/google/contact-google/contact-google.component';
import { HeroNetflixComponent } from './components/netflix/hero-netflix/hero-netflix.component';
import { NetflixComponent } from './components/netflix/netflix/netflix.component';
import { GoogleComponent } from './components/google/google/google.component';
import { AboutNetflixComponent } from './components/netflix/about-netflix/about-netflix.component';
import { SkillsNetflixComponent } from './components/netflix/skills-netflix/skills-netflix.component';
import { ProjectsNetflixComponent } from './components/netflix/projects-netflix/projects-netflix.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactNetflixComponent } from './components/netflix/contact-netflix/contact-netflix.component';

const appRoutes: Routes = [
  {
    path : '',
    component : GoogleComponent
  },
  {
    path : 'tesla',
    component : TeslaComponent
  },
  {
    path : 'netflix',
    component : NetflixComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarGoogleComponent,
    HeroGoogleComponent,
    AboutGoogleComponent,
    TeslaComponent,
    ProjectsGoogleComponent,
    ContactGoogleComponent,
    HeroNetflixComponent,
    NetflixComponent,
    GoogleComponent,
    AboutNetflixComponent,
    SkillsNetflixComponent,
    ProjectsNetflixComponent,
    ContactNetflixComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
