import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Http: HttpClient) { }

  getShows(search: string): Observable<any> {
    return this.Http.get<any>( 'http://api.tvmaze.com/search/shows?q=' + search);
  }
  getSeasons(showId: string): Observable<any> {
    return this.Http.get<any> ('http://api.tvmaze.com/shows/' + showId + '/seasons');
  }

  getEpisodes(seasonId: string) {
    return this.Http.get<any> ('http://api.tvmaze.com/seasons/' + seasonId + '/episodes');
  }
}
