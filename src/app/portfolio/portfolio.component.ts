import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public bigfootProjectMedia = [
    {
      "title": "Home View",
      "image": "bigfoot-home.png"
    },
    {
      "title": "Sightings View",
      "image": "bigfoot-sightings.png"
    },
    {
      "title": "Report Sighting View",
      "image": "bigfoot-report-new.png"
    },
    {
      "title": "View Sighting Detail View",
      "image": "bigfoot-view-sighting.png"
    },
    {
      "title": "Map View",
      "image": "bigfoot-map.png"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
