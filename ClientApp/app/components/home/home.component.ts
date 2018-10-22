import { VerseGroup } from './../../models/VerseGroup';
import { VerseService } from './../../services/verse.service';
import { Component } from '@angular/core';
import { fade } from '../../animations/fade.animation';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [fade]
})
export class HomeComponent {

    public verseGroup: VerseGroup = <VerseGroup>{};
    public errors: any[] = [];

    constructor(private verseService: VerseService) { }

    ngOnInit() {
        this.verseService.getVerseGroup.subscribe( verseGroup => {
            this.verseGroup = verseGroup;
        })

        this.verseService.getErrors.subscribe( errors => {
            this.errors = errors;
        })
    }

    fetch(query: string){
        this.verseService.fetch(query);
    }

}
