import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../models/data.service';

@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styleUrls: ['./season-details.component.scss']
})
export class SeasonDetailsComponent implements OnInit {
  @Input() seasonId: string;
  episodes: any[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getEpisodes();
  }

  getEpisodes() {
    this.dataService.getEpisodes(this.seasonId).subscribe(
      (result) => this.episodes = result
    );
  }

}