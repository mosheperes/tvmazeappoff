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

  getShows(search: string): Observable<Shows[]> {
    return this.Http.get<Shows[]>( 'http://api.tvmaze.com/search/shows?q=' + search);
  }
  getSeasons(showId: string): Observable<Seasons[]> {
    return this.Http.get<Seasons[]> ('http://api.tvmaze.com/shows/' + showId + '/seasons');
  }

  getEpisodes(seasonId: string): Observable<Episodes[]> {
    return this.Http.get<Episodes[]> ('http://api.tvmaze.com/seasons/' + seasonId + '/episodes');
  }
}
