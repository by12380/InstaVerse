import { fade } from './../../animations/fade.animation';
import { StudySheetService } from './../../services/studysheet.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-studysheet',
  templateUrl: './studysheet.component.html',
  styleUrls: ['./studysheet.component.css'],
  animations: [fade]
})
export class StudysheetComponent implements OnInit {

  isDeleteMode: boolean;
  verseGroupList: string[][] = [];

  constructor(private studySheetService: StudySheetService) {
  }

  ngOnInit() {
    this.studySheetService.currentMessage
      .subscribe(verseGroupList => this.verseGroupList = verseGroupList);
    
    this.studySheetService.isDeleteMode
      .subscribe(isDeleteMode => this.isDeleteMode = isDeleteMode);
  }

  ngAfterViewInit() {
    //Toggle footnotes
    $("#chk_footnote").change(function () {
      if ($("#chk_footnote").prop("checked")) {
          $("#MainContainer").find("sup a").removeClass("hidden");
      } else {
          $("#MainContainer").find("sup a").addClass("hidden");
      }
    })
  }

}
