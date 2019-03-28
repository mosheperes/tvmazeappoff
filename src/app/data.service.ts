import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Http: HttpClient) { }

  getshows(search: string): Observable<any> {
    return this.Http.get<any>( 'http://api.tvmaze.com/search/shows?q=' + search);
  }
}
