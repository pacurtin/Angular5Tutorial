import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// This is the main place for tying our module together. App == Collection of modules tied together

@NgModule({
  // These are other modules ours needs
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  // Components, Directives and pipes in our module
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // Registers providers in the root injector. Providers provide services for injection into components
  providers: [],
  // Root component of app
  bootstrap: [AppComponent]
})

export class AppModule { }
