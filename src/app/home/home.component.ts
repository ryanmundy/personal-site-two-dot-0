import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  private options = {
    strings: ["Welcome to my page!",
      "I would like to personally thank you for taking the time to visit this page, designed and built by me.",
      "Here you will find all kinds of information about me.",
      "If it's not here, feel free to message me or visit my LinkedIn profile below ↓"],
    typeSpeed: 75,
    backSpeed: 25,
    showCursor: true,
    cursorChar: "|",
    loop: true
  }

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    let typed = new Typed(".typing-element", this.options);
  }

}
