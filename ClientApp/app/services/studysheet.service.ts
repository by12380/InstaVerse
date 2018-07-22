import { VerseGroup } from './../models/VerseGroup';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StudySheetService {

    private verseGroups: VerseGroup[] = [];
    private verseGroupListSource = new BehaviorSubject<VerseGroup[]>(this.verseGroups);
    public getVerseGroups = this.verseGroupListSource.asObservable();

    private _isDeleteMode : boolean = false;
    private isDeleteModeSource = new BehaviorSubject<boolean>(this._isDeleteMode);
    public isDeleteMode = this.isDeleteModeSource.asObservable();

    constructor() { }

    addVerseGroup(verseGroup: VerseGroup) {
        this.verseGroups.push(verseGroup);
        this.verseGroupListSource.next(this.verseGroups);
    }

    removeVerseGroup(verseGroup: VerseGroup){
        let index = this.verseGroups.indexOf(verseGroup);
        this.verseGroups.splice(index, 1);
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