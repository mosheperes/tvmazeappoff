import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchResultsComponent } from './views/search-results/search-results.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { ShowdetailsComponent } from './showdetails/showdetails.component';
// import { Router } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchResultsComponent,
    HomeComponent,
    ShowdetailsComponent
    // AppModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
