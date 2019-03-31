import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchResultsComponent} from './views/search-results/search-results.component';
import {HomeComponent} from './views/home/home.component';
import {ShowdetailsComponent} from './views/showdetails/showdetails.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'search-results/:search', component: SearchResultsComponent},
  {path: 'show/:showId', component: ShowdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }


// this is where everything goes to we add paths in here to link to other pages that's why it is called "route"
