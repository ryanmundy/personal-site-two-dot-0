import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  accordionIndex = 5;
  mobileView: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.mobileView = window.innerWidth <= 500;
  }

  openAccordion(index: any) {
    if (!this.mobileView) {
      this.accordionIndex = index;
    }
  }

  closeAccordion() {
    if (!this.mobileView) {
      this.accordionIndex = 5;
    
    }
  }

}
