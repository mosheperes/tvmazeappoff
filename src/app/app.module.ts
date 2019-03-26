import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { SearchResultsComponent } from './views/search-results/search-results.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
// import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchResultsComponent
    // AppModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule
    // Router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
