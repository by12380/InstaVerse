import { VerseGroup } from './../../models/VerseGroup';
import { fade } from './../../animations/fade.animation';
import { StudySheetService } from './../../services/studysheet.service';
import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as bootbox from 'bootbox';
import { Verse } from '../../models/Verse';

@Component({
  selector: 'verse-container',
  templateUrl: './verse-container.component.html',
  styleUrls: ['./verse-container.component.css'],
  animations: [fade]
})
export class VerseContainerComponent implements OnInit {

  @Input() verseGroup: VerseGroup;

  @Input() isDeleteMode : boolean;

  constructor(private studySheetService: StudySheetService) { }

  ngOnInit() {
  }

  removeFromList() {
    var confirmMessage: string;
    var studySheetService = this.studySheetService;
    var verseGroup = this.verseGroup;

    if (verseGroup.verses.length == 1) {
      confirmMessage = 'Are you sure you want to delete this verse?';
    } else {
      confirmMessage = 'Are you sure you want to delete these ' + verseGroup.verses.length + ' verses?';
    }

    bootbox.confirm({
      message: confirmMessage,
      size: 'small',
      callback:
      function(result){
        if(result){
          // Todo: Fix parameter type for .removeVerseGroup() and enable it.
          // studySheetService.removeVerseGroup(verseGroup);
        }
      }
    })
  }
}
