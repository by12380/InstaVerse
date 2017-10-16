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

  messageBox: Array<string> = [];

  constructor(private studySheet: StudySheetService) { }

  ngOnInit() {
    this.studySheet.currentMessage.subscribe(messageBox => this.messageBox = messageBox);
  }

}
