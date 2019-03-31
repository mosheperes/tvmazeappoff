import {Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../models/data.service';
import {Shows} from '../../models/shows';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass']
})
export class SearchResultsComponent implements OnInit {
  shows: Shows[];
  constructor(private route: ActivatedRoute, private dataservice: DataService ) { }
  ngOnInit() {
    this.getshow();
  }

  getshow() {
    const search = this.route.snapshot.paramMap.get('search');
    this.dataservice.getShows(search).subscribe((results) => this.shows = results );
  }

}
