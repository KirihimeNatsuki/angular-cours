import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },

  { path: '', component: MainComponent}

];

@NgModule({
  imports:      [ BrowserModule, FormsModule, FontAwesomeModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, MainComponent, BlogComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
    constructor(private library: FaIconLibrary) {
    library.addIcons(faPhoneAlt, faEnvelope, farEnvelope, faFacebookF, faGithub, faLinkedinIn);
  }
}
