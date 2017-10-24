import { VerseParserService } from './../../services/verse-parser.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { StudySheetService } from './../../services/studysheet.service';
import { Component, AfterViewInit } from '@angular/core';
import { fade } from '../../animations/fade.animation';
import * as $ from 'jquery';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [fade]
})
export class HomeComponent {

    public verses: string[] = [];
    public errorStrings: string[] = [];

    constructor(private verseParserService: VerseParserService) { }

    ngOnInit() {
        this.verseParserService.latestVerses.subscribe(verses => this.verses = verses);
        this.verseParserService.latestErrors.subscribe(errorStrings => this.errorStrings = errorStrings);
    }

    fetch(str: string){
        this.verseParserService.fetchVerses(str);
    }

    ngAfterViewInit() {
        // //Toggle footnotes
        // $("#home_chk_footnote").change(function () {
        //     if ($("#home_chk_footnote").prop("checked")) {
        //         $("#HomeContainer").find("sup a").removeClass("hidden");
        //     } else {
        //         $("#HomeContainer").find("sup a").addClass("hidden");
        //     }
        // })
    }

}
