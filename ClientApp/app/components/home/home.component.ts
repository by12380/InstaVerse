import { VerseParserService } from './../../services/verse-parser.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { StudySheetService } from './../../services/studysheet.service';
import { Component } from '@angular/core';
import { fade } from '../../animations/fade.animation';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [fade]
})
export class HomeComponent {

    public verses: string[] = [];

    constructor(private verseParserService: VerseParserService) { }

    ngOnInit() {
        this.verseParserService.latestVerses.subscribe(verses => this.verses = verses);
    }

    fetch(str: string){
        this.verseParserService.fetchVerses(str);
    }

}
