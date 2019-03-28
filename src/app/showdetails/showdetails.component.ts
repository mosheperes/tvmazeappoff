import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchResultsComponent} from '../views/search-results/search-results.component';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.scss']
})


export class  ShowdetailsComponent implements OnInit {
  constructor() {}


  ngOnInit() {}

}



//     this.service.getShows(
//       this.route.snapshot.paramMap.get('query')
//     ).subscribe(
//       result => this.shows = result
//     );
//   }
// }








