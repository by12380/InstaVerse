import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StudySheetService {

private verseGroupList: string[][] = [];
private source = new BehaviorSubject<string[][]>(this.verseGroupList);
public currentMessage = this.source.asObservable();

constructor() { }

addVerseGroup(verseGroup: string[]) {
    this.verseGroupList.push(verseGroup);
    this.source.next(this.verseGroupList);
}

removeVerseGroup(verseGroup: string[]){
    let index = this.verseGroupList.indexOf(verseGroup);
    this.verseGroupList.splice(index, 1);
}

}