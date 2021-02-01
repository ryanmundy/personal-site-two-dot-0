import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon-placeholder',
  templateUrl: './coming-soon-placeholder.component.html',
  styleUrls: ['./coming-soon-placeholder.component.scss']
})
export class ComingSoonPlaceholderComponent implements OnInit {
  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
