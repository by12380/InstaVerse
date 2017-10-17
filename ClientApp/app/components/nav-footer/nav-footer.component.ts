import { StudySheetService } from './../../services/studysheet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.css']
})
export class NavFooterComponent implements OnInit {

  isDeleteMode: boolean;

  constructor(private studySheetService: StudySheetService) {
    this.studySheetService.isDeleteMode.subscribe(isDeleteMode => this.isDeleteMode = isDeleteMode);
  }

  ngOnInit() {
  }

  newMessage() {
    this.studySheetService.addVerseGroup(["hi", "hello"]);
  }

  activateDeleteMode() {
    this.studySheetService.activateDeleteMode();
  }

  escapeDeleteMode() {
    this.studySheetService.escapeDeleteMode();
  }

}
