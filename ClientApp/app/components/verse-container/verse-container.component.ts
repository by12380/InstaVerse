import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'verse-container',
  templateUrl: './verse-container.component.html',
  styleUrls: ['./verse-container.component.css']
})
export class VerseContainerComponent implements OnInit {

  @Input() messages: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
