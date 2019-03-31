import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
// you are exporting the class homecomponent and takes a search valueble and equals it to a string so when
// you search it will only take in a string nothing else
export class HomeComponent implements OnInit {
  search: string;

  constructor() { }

  ngOnInit() {
  }

}
