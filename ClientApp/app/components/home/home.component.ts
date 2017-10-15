import { StudySheetService } from './../../services/studysheet.service';
import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {

    messageBox: Array<string>;

    constructor(private studySheet: StudySheetService) { }

    ngOnInit() {
        this.studySheet.currentMessage.subscribe(messageBox => this.messageBox = messageBox);
    }

    newMessage() {
        this.studySheet.changeMessage(["hi", "hello"]);
    }

}
