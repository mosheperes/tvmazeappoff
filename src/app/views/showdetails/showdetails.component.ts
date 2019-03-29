import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchResultsComponent} from '../search-results/search-results.component';
import {DataService} from '../../models/data.service';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.scss']
})


export class  ShowdetailsComponent implements OnInit {
  showId: string;
  seasons: any;
  constructor(private route: ActivatedRoute, private dataservice: DataService) {
  }


  ngOnInit() {
    this.getSeasons();
  }

  getSeasons() {
     this.showId = this.route.snapshot.paramMap.get('showId');
     this.dataservice.getSeasons(this.showId).subscribe((results) => {
       this.seasons = results;
       console.log(results);
     } );
   }



}








