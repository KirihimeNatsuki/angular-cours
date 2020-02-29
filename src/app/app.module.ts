import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPhoneAlt, faEnvelope, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { BlogComponent } from './blog/blog.component';
import { ProfilComponent } from './profil/profil.component';
import { ContactComponent } from './contact/contact.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: MainComponent}

];

@NgModule({
  imports:      [ BrowserModule, FormsModule, FontAwesomeModule, NgbModule, MatProgressBarModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, MainComponent, BlogComponent, ProfilComponent, ContactComponent ],
  bootstrap:    [ AppComponent ],
  exports:      [MatProgressBarModule]
})
export class AppModule { 
    constructor(private library: FaIconLibrary) {
    library.addIcons(faPhoneAlt, faEnvelope, farEnvelope, faFacebookF, faGithub, faLinkedinIn, faChevronRight);
  }
}
