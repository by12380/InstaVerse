import { FirebaseApp } from 'angularfire2';
import { VerseGroup } from './../models/VerseGroup';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from './auth.service';

@Injectable()
export class StudySheetService {

    user: firebase.User;

    private verseGroups: VerseGroup[] = [];
    private verseGroupListSource = new BehaviorSubject<VerseGroup[]>(this.verseGroups);
    public getVerseGroups = this.verseGroupListSource.asObservable();

    private _isDeleteMode : boolean = false;
    private isDeleteModeSource = new BehaviorSubject<boolean>(this._isDeleteMode);
    public isDeleteMode = this.isDeleteModeSource.asObservable();

    constructor(private auth: AuthService, private app: FirebaseApp) {
        this.auth.user$.subscribe((user) => {
            this.user = user;
            if (this.user) {
                this.app.database().ref(`/users/${user.uid}/verseGroups`).once('value', (snapShot) => {
                    this.verseGroups = snapShot.val() ? snapShot.val() : [];
                    this.verseGroupListSource.next(this.verseGroups);
                })
            } else {
                this.verseGroups = [];
                this.verseGroupListSource.next(this.verseGroups);
            }
        })
    }

    addVerseGroup(verseGroup: VerseGroup) {
        this.verseGroups.push(verseGroup);

        if (this.user) {
            this._updateVerseGroupsAuthenticated();
        }
        else {
            this._updateVerseGroupsGuest();
        }

    }

    removeVerseGroup(verseGroup: VerseGroup){
        let index = this.verseGroups.indexOf(verseGroup);
        this.verseGroups.splice(index, 1);

        if (this.user) {
            this._updateVerseGroupsAuthenticated();
        }
        else {
            this._updateVerseGroupsGuest();
        }

    }

    _updateVerseGroupsGuest() {
        this.verseGroupListSource.next(this.verseGroups);
    }

    _updateVerseGroupsAuthenticated() {
        this.app.database().ref(`/users/${this.user.uid}/verseGroups`).set(this.verseGroups);
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