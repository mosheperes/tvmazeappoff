import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchResultsComponent} from './views/search-results/search-results.component';
import {HomeComponent} from './home/home.component';
import {ShowdetailsComponent} from './showdetails/showdetails.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'search/:query', component: SearchResultsComponent},
  {path: 'show/:showId', component: ShowdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
