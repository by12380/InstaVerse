import { VerseGroup } from './../models/VerseGroup';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Verse } from '../models/verse';

@Injectable()
export class VerseService {

    private readonly API_URL = "http://api.lsm.org/recver.php";

    constructor(private http: Http) { }

    private verseGroup: VerseGroup = <VerseGroup>{};
    private verseGroupSource = new BehaviorSubject<VerseGroup>(this.verseGroup);
    public getVerseGroup = this.verseGroupSource.asObservable();

    public fetch(query: string) {
        this.http
            .get(this.API_URL, { params: { Out: "json", String: query }})
            .map(res => res.json() as VerseGroup)
            .subscribe(verseGroup => this.verseGroupSource.next(verseGroup));
    }

}
