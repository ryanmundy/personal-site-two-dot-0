import { Component, OnInit } from '@angular/core';
import { NAV_TABS } from './tab';

@Component({
  selector: 'app-tabnav',
  templateUrl: './tabnav.component.html',
  styleUrls: ['./tabnav.component.scss']
})
export class TabnavComponent implements OnInit {

  selectedTab = NAV_TABS.HOME;
  tabs = NAV_TABS;

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tab: NAV_TABS) {
    this.selectedTab = tab;
  }

}
