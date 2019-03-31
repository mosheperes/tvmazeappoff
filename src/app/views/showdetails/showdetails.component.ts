import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../models/data.service';
import {Seasons} from '../../models/seasons';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.scss']
})

// this class takes in A showid variable and sets it to a string,It also takes in a variable seasons and sets to the season array
export class  ShowdetailsComponent implements OnInit {
  showId: string;
  seasons: Seasons[];
  constructor(private route: ActivatedRoute, private dataservice: DataService) {
  }

  // Inintializes the getseasons Method
  ngOnInit() {
    this.getSeasons();
  }
  // this function connects to the service to retrieve the showId, It will also retrieve the information on the seasons.ts folder
  getSeasons() {
     this.showId = this.route.snapshot.paramMap.get('showId');
     this.dataservice.getSeasons(this.showId).subscribe((results) => {
       this.seasons = results;
       console.log(results);
     } );
   }



}








