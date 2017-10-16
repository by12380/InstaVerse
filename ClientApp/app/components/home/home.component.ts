import { trigger, style, animate, transition } from '@angular/animations';
import { StudySheetService } from './../../services/studysheet.service';
import { Component } from '@angular/core';
import { fade } from '../../animations/fade.animation';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    animations: [fade]
})
export class HomeComponent {

    constructor() { }

    ngOnInit() {
    }

}
