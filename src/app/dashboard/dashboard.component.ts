import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NAV_TABS } from '../tabnav/tab';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  onHomeView: boolean = false;
  mobileView: boolean = false;
  mobileMenuOpen: boolean = false;
  selectedTab = NAV_TABS.HOME;
  tabs = NAV_TABS;

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
    this.mobileView = window.innerWidth <= 500;
  }

  openCloseMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  changeTab(tab: NAV_TABS) {
    this.selectedTab = tab;
    this.openCloseMobileMenu();
  }

}
