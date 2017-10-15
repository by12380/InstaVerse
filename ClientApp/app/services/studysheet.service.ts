import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class StudySheetService {

private messageBox: Array<string>;
private messageSource = new BehaviorSubject<Array<string>>(this.messageBox);
public currentMessage = this.messageSource.asObservable();

constructor() { }

changeMessage(messageBox: Array<string>) {
    this.messageSource.next(messageBox);
}

}