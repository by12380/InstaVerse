import { VerseParserService } from './../../services/verse-parser.service';
import { fade } from './../../animations/fade.animation';
import { NavbarComponent } from './../navbar/navbar.component';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [fade]
})
export class AppComponent {

    isLoading: boolean =  false;
    isVisible: boolean = false;

    constructor(
        private verseParserService: VerseParserService,
        public router: Router
    )
    {
        this.verseParserService.isLoading.subscribe(isLoading => this.isLoading = isLoading);
    }

    onAddToStudySheet(){
        this.isVisible = true;
        setTimeout(() => {  
            this.isVisible = false;
          }, 900);
    }

}
