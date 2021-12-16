import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Router, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarGoogleComponent } from './components/navbar-google/navbar-google.component';
import { HeroGoogleComponent } from './components/hero-google/hero-google.component';
import { AboutGoogleComponent } from './components/about-google/about-google.component';
import { GoogleComponent } from './components/google/google.component';
import { TeslaComponent } from './components/tesla/tesla.component';
import { ProjectsGoogleComponent } from './components/projects-google/projects-google.component';
import { ContactGoogleComponent } from './components/contact-google/contact-google.component';

const appRoutes: Routes = [
  {
    path : '',
    component : GoogleComponent
  },
  {
    path : 'tesla',
    component : TeslaComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarGoogleComponent,
    HeroGoogleComponent,
    AboutGoogleComponent,
    GoogleComponent,
    TeslaComponent,
    ProjectsGoogleComponent,
    ContactGoogleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
