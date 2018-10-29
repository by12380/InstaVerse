import { VerseGroup } from './../models/VerseGroup';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Verse } from '../models/verse';

@Injectable()
export class VerseService {

    private readonly API_URL = "https://api.lsm.org/recver.php";

    constructor(private http: Http) { }

    private verseGroup: VerseGroup = <VerseGroup>{};
    private verseGroupSource = new BehaviorSubject<VerseGroup>(this.verseGroup);
    public getVerseGroup = this.verseGroupSource.asObservable();

    private erros: any[] = []
    private errorsSource = new BehaviorSubject<any[]>(this.erros);
    public getErrors = this.errorsSource.asObservable();

    public fetch(query: string) {
        this.http
            .get(this.API_URL, { params: { Out: "json", String: query }})
            .map(res => res.json() as VerseGroup)
            .subscribe(
                (verseGroup) => { this._fiter(verseGroup) });
    }

    private _fiter(rawVerseGroup: VerseGroup) {
        const verseGroup: VerseGroup = <VerseGroup>{};
        const errors: any[] = [];

        verseGroup.verses = [];

        rawVerseGroup.verses.forEach((verse) => {
            if (verse.text.includes('No such')) {
                errors.push(verse);
            } else {
                verseGroup.verses.push(verse);
            }
        })

        this.verseGroupSource.next(verseGroup);
        this.errorsSource.next(errors);
    }

}
