import {Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../models/data.service';
import {Shows} from '../../models/shows';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
// This class has a variable Shows which refers to an array of shows which is in the shows.ts
export class SearchResultsComponent implements OnInit {
  shows: Shows[];
  constructor(private route: ActivatedRoute, private dataservice: DataService ) { }
  ngOnInit() {
    this.getshow();
  }
    // this function calls the service and to thge api and will display all the shows.
  getshow() {
    const search = this.route.snapshot.paramMap.get('search');
    this.dataservice.getShows(search).subscribe((results) => this.shows = results );
  }

}
