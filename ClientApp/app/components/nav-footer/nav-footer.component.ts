import { VerseParserService } from './../../services/verse-parser.service';
import { StudySheetService } from './../../services/studysheet.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.css']
})
export class NavFooterComponent implements OnInit {

  @Output() addToStudySeetEvent = new EventEmitter<string>();
  private verses: string[] = [];
  public isDeleteMode: boolean;

  constructor(
      private studySheetService: StudySheetService,
      private verseParserService: VerseParserService) {
    this.studySheetService.isDeleteMode.subscribe(isDeleteMode => this.isDeleteMode = isDeleteMode);
    this.verseParserService.latestVerses.subscribe(verses => this.verses = verses);
  }

  ngOnInit() {
  }

  addToSheet() {
    if (this.verses.length == 0) return;
    this.studySheetService.addVerseGroup(this.verses);
    this.addToStudySeetEvent.emit();
  }

  activateDeleteMode() {
    this.studySheetService.activateDeleteMode();
  }

  escapeDeleteMode() {
    this.studySheetService.escapeDeleteMode();
  }

}
