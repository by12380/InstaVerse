import { VerseParserService } from './../../services/verse-parser.service';
import { StudySheetService } from './../../services/studysheet.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VerseService } from '../../services/verse.service';
import { VerseGroup } from '../../models/VerseGroup';

@Component({
  selector: 'nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.css']
})
export class NavFooterComponent implements OnInit {

  @Output() addToStudySeetEvent = new EventEmitter<string>();
  private verseGroup: VerseGroup = <VerseGroup>{};
  public isDeleteMode: boolean;

  constructor(
      private studySheetService: StudySheetService,
      private verseService: VerseService) {
    this.studySheetService.isDeleteMode.subscribe(isDeleteMode => this.isDeleteMode = isDeleteMode);
    this.verseService.getVerseGroup.subscribe(verseGroup => this.verseGroup = verseGroup);
  }

  ngOnInit() {
  }

  addToSheet() {
    if (this.verseGroup.verses.length == 0) return;
    this.studySheetService.addVerseGroup(this.verseGroup);
    this.addToStudySeetEvent.emit();
  }

  activateDeleteMode() {
    this.studySheetService.activateDeleteMode();
  }

  escapeDeleteMode() {
    this.studySheetService.escapeDeleteMode();
  }

}
