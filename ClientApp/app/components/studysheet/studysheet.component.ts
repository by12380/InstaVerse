import { VerseGroup } from './../../models/VerseGroup';
import { fade } from './../../animations/fade.animation';
import { StudySheetService } from './../../services/studysheet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studysheet',
  templateUrl: './studysheet.component.html',
  styleUrls: ['./studysheet.component.css'],
  animations: [fade]
})
export class StudysheetComponent implements OnInit {

  isDeleteMode: boolean;
  verseGroups: VerseGroup[] = [];

  constructor(private studySheetService: StudySheetService) {
  }

  ngOnInit() {
    this.studySheetService.getVerseGroups
      .subscribe(verseGroups => this.verseGroups = verseGroups);
    
    this.studySheetService.isDeleteMode
      .subscribe(isDeleteMode => this.isDeleteMode = isDeleteMode);
  }

}
