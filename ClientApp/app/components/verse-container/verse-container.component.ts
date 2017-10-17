import { StudySheetService } from './../../services/studysheet.service';
import { Component, OnInit, Input } from '@angular/core';
import * as bootbox from 'bootbox';

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
    var confirmMessage: string;
    var studySheetService = this.studySheetService;

    if (verseGroup.length == 1) {
      confirmMessage = 'Are you sure you want to delete this verse?';
    } else {
      confirmMessage = 'Are you sure you want to delete these ' + verseGroup.length + ' verses?';
    }

    bootbox.confirm(confirmMessage, function(result){
      if(result){
        studySheetService.removeVerseGroup(verseGroup);
      }
    })
  }

}
