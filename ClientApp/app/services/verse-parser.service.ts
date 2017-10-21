import { ScriptureResource } from './../models/ScriptureResource';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class VerseParserService {

    private readonly apiGetUrl = "api/Scriptures/Get";

    private verseList: string[]= [];
    private verseListSource = new BehaviorSubject<string[]>(this.verseList);
    public latestVerses = this.verseListSource.asObservable();

    private errorStrings: string[]= [];
    private errorStringsSource = new BehaviorSubject<string[]>(this.errorStrings);
    public latestErrors = this.errorStringsSource.asObservable();

    private loadProgress: boolean = false;
    private loadProgressSource = new BehaviorSubject<boolean>(this.loadProgress);
    public isLoading = this.loadProgressSource.asObservable();


    constructor(private http: Http) { }

    public fetchVerses(rawVerseRefs: string){

        this.loadProgressSource.next(true);

        let params = new URLSearchParams();
        let collection: string[] = this.verseParser(rawVerseRefs);

        for(let v of collection){
            params.append('verses', v);
        }

        this.http.get(this.apiGetUrl, {search: params})
            .map(res => res.json() as ScriptureResource)
            .subscribe(resource => {
                this.verseListSource.next(resource.verseCollection);
                this.errorStringsSource.next(resource.errorStrings);
                this.loadProgressSource.next(false);
            });
    }

    private verseParser(str: string): string[] {
        let verse_list = [];

        if (!/[A-z]/.test(str)) {
            return [];
        }

        str = str.replace(/^\s+|\s+$/gm, '');
        str = str.replace(/;$/, '');

        let list = str.split(';');

        let book: string = "";
        for (let i = 0; i < list.length; i++) {
            list[i] = list[i].replace(/^\s+|\s+$/gm, '');
            list[i] = list[i].replace(/[.]+/g, '');
            let temp = list[i].split(':');

            if (temp[0].search(/.*[A-z]/) != -1) {
                book = temp[0].match(/.*[A-z]/)![0];
                book = book.replace(/\s+/g, ' ');
                let firstChar = book.search(/[A-z]/);
                if (book.charAt(firstChar - 1) == ' ') {
                    book = book.slice(0, firstChar) + book.charAt(firstChar).toUpperCase() + book.slice(firstChar + 1).toLowerCase();
                } else {
                    book = book.slice(0, firstChar) + ' ' + book.charAt(firstChar).toUpperCase() + book.slice(firstChar + 1).toLowerCase();
                }
                book = book.trim();
                
                    var q = list[i].slice(0, list[i].indexOf(':')).match(/.*[A-z]\s*/)![0].length;
                    if (!/\d/.test(list[i].charAt(q))) {
                        q += 1;
                    };
                    list[i] = list[i].slice(q); 
                    list[i] = list[i].replace(/\s+/g, '');
                
                
            }

            list[i] = book + " " + list[i];
        }


        for (var i = 0; i < list.length; i++) {

            if (list[i].search(':') == -1) {
                if (!(/\d$/.test(list[i]))) {
                    list[i] += ' 1';
                }
                verse_list.push(list[i]);  
            } else {
                var temp = list[i].split(':');
                var chap = temp[0];
                chap = chap.replace(/\s+/g, ' ');
                chap = chap.replace(/\s*$/, '');
                var verses = temp[1];
                verses = verses.replace(/\s+/g, '');
                verses.replace(/,$/, '');
                var nums = verses.split(',');
                for (var j = 0; j < nums.length; j++) {
                    verse_list.push(chap + ":" + nums[j]);
                }
            }
        }
        
        return verse_list;
    }

}