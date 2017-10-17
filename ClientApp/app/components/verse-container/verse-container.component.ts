import { StudySheetService } from './../../services/studysheet.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'verse-container',
  templateUrl: './verse-container.component.html',
  styleUrls: ['./verse-container.component.css']
})
export class VerseContainerComponent implements OnInit {

  @Input() verseGroup: string[];

  constructor(private studySheetService: StudySheetService) { }

  ngOnInit() {
  }

  removeFromList(verseGroup: string[]) {
    this.studySheetService.removeVerseGroup(verseGroup);
  }

}
