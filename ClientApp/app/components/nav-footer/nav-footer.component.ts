import { StudySheetService } from './../../services/studysheet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.css']
})
export class NavFooterComponent implements OnInit {

  isDeleteMode = false;

  constructor(private studySheet: StudySheetService) {
  }

  ngOnInit() {
  }

  newMessage() {
    this.studySheet.changeMessage(["hi", "hello"]);
  }

  toggleMode(){
    this.isDeleteMode = !this.isDeleteMode;
  }

}
