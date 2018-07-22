import { VerseGroup } from './../../models/VerseGroup';
import { VerseService } from './../../services/verse.service';
import { trigger, style, animate, transition } from '@angular/animations';
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

    public verseGroup: VerseGroup = <VerseGroup>{};
    public errorStrings: string[] = [];

    constructor(private verseService: VerseService) { }

    ngOnInit() {
        this.verseService.getVerseGroup.subscribe( verseGroup => {
            this.verseGroup = verseGroup;
        })
    }

    fetch(query: string){
        this.verseService.fetch(query);
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
