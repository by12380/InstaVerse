import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StudySheetService {

    private verseGroupList: string[][] = [];
    private verseGroupListSource = new BehaviorSubject<string[][]>(this.verseGroupList);
    public currentMessage = this.verseGroupListSource.asObservable();

    private _isDeleteMode : boolean = false;
    private isDeleteModeSource = new BehaviorSubject<boolean>(this._isDeleteMode);
    public isDeleteMode = this.isDeleteModeSource.asObservable();

    constructor() { }

    addVerseGroup(verseGroup: string[]) {
        this.verseGroupList.push(verseGroup);
        this.verseGroupListSource.next(this.verseGroupList);
    }

    removeVerseGroup(verseGroup: string[]){
        let index = this.verseGroupList.indexOf(verseGroup);
        this.verseGroupList.splice(index, 1);
    }

    activateDeleteMode() {
        if (!this._isDeleteMode) {
           this._isDeleteMode = true;
           this.isDeleteModeSource.next(this._isDeleteMode);
        }
    }

    escapeDeleteMode() {
        if (this._isDeleteMode) {
           this._isDeleteMode = false;
           this.isDeleteModeSource.next(this._isDeleteMode);
        }
    }

}