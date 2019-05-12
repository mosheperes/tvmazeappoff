import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Shows} from './shows';
import {Episodes} from './episodes';
import {Seasons} from './seasons';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Http: HttpClient) { }

  // This Gets All the shows from The Api And this function is being called so it fetches data from the api
  getShows(search: string): Observable<Shows[]> {
    return this.Http.get<Shows[]>( 'https://api.tvmaze.com/search/shows?q=' + search);
  }
  // this fetches data from the api and returns it to get all the seasons
  getSeasons(showId: string): Observable<Seasons[]> {
    return this.Http.get<Seasons[]> ('https://api.tvmaze.com/shows/' + showId + '/seasons');
  }
  // This fetches data from the api and displays all the episodes which it retrieves from the api
  getEpisodes(seasonId: string): Observable<Episodes[]> {
    return this.Http.get<Episodes[]> ('https://api.tvmaze.com/seasons/' + seasonId + '/episodes');
  }
}
