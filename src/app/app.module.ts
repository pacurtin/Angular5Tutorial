import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataService } from './data.service';


// This is the main place for tying our module together. App == Collection of modules tied together

@NgModule({
  // Components, Directives and pipes in our module
  declarations: [
    // This is a default component from ng new. Is it special?
    AppComponent,
    // These were added using ng generate component (ng g c)
    HomeComponent,
    AboutComponent
  ],
  // These are other modules ours needs
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  // Registers providers in the root injector. Providers provide services for injection into components
  providers: [DataService],
  // Root component of app
  bootstrap: [AppComponent]
})

export class AppModule { }
