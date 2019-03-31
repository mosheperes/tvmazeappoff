import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../models/data.service';
import {Episodes} from '../../models/episodes';

@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styleUrls: ['./season-details.component.scss']
})
// this class takes a variable episodes and the value is an array of episodes.
export class SeasonDetailsComponent implements OnInit {
  @Input() seasonId: string;
  episodes: Episodes[];
  constructor(private dataService: DataService) { }

  // this initializes the getepisodes
  ngOnInit() {
    this.getEpisodes();
  }

  // This function calls the dataservice and it will and will get the seasonId and then will subscribe to it
  getEpisodes() {
    this.dataService.getEpisodes(this.seasonId).subscribe(
      (result) => this.episodes = result
    );
  }

}
