import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarGoogleComponent } from './components/google/navbar-google/navbar-google.component';
import { HeroGoogleComponent } from './components/google/hero-google/hero-google.component';
import { AboutGoogleComponent } from './components/google/about-google/about-google.component';
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
import { TeslaComponent } from './components/tesla/tesla/tesla.component';
import { HeroTeslaComponent } from './components/tesla/hero-tesla/hero-tesla.component';
import { AboutTeslaComponent } from './components/tesla/about-tesla/about-tesla.component';
import { SkillsTeslaComponent } from './components/tesla/skills-tesla/skills-tesla.component';
import { ProjectsTeslaComponent } from './components/tesla/projects-tesla/projects-tesla.component';
import { FooterTeslaComponent } from './components/tesla/footer-tesla/footer-tesla.component';
import { SearchComponent } from './components/search/search/search.component';
import { AboutSearchComponent } from './components/search/about-search/about-search.component';
import { SkillsSearchComponent } from './components/search/skills-search/skills-search.component';
import { EducationSearchComponent } from './components/search/education-search/education-search.component';
import { ProjectsSearchComponent } from './components/search/projects-search/projects-search.component';
import { ContactSearchComponent } from './components/search/contact-search/contact-search.component';
import { AmazonComponent } from './components/amazon/amazon/amazon.component';
import { HeroAmazonComponent } from './components/amazon/hero-amazon/hero-amazon.component';

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
  },
  {
    path : 'search',
    component : SearchComponent
  },
  {
    path : 'search/about',
    component : AboutSearchComponent
  },
  {
    path : 'search/skills',
  component : SkillsSearchComponent
  },
  {
    path : 'search/education',
    component : EducationSearchComponent
  },
  {
    path : 'search/projects',
    component : ProjectsSearchComponent
  },
  {
    path : 'search/contact',
    component : ContactSearchComponent
  },
  {
    path : 'amazon',
    component : AmazonComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarGoogleComponent,
    HeroGoogleComponent,
    AboutGoogleComponent,
    ProjectsGoogleComponent,
    ContactGoogleComponent,
    HeroNetflixComponent,
    NetflixComponent,
    GoogleComponent,
    AboutNetflixComponent,
    SkillsNetflixComponent,
    ProjectsNetflixComponent,
    ContactNetflixComponent,
    TeslaComponent,
    HeroTeslaComponent,
    AboutTeslaComponent,
    SkillsTeslaComponent,
    ProjectsTeslaComponent,
    FooterTeslaComponent,
    SearchComponent,
    AboutSearchComponent,
    SkillsSearchComponent,
    EducationSearchComponent,
    ProjectsSearchComponent,
    ContactSearchComponent,
    AmazonComponent,
    HeroAmazonComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
