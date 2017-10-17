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

  verseGroupList: string[][] = [];

  constructor(private studySheetService: StudySheetService) {
    
  }

  ngOnInit() {
    this.studySheetService.currentMessage.subscribe(verseGroupList => this.verseGroupList = verseGroupList);
  }

}
