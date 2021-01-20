import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  onHomeView: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (this.router.url === '/dashboard/home') {
        this.onHomeView = true;
      } else {
        this.onHomeView = false;
      }
    });
  }

  ngOnInit(): void {
  }

}
