/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudysheetComponent } from './studysheet.component';

describe('StudysheetComponent', () => {
  let component: StudysheetComponent;
  let fixture: ComponentFixture<StudysheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudysheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudysheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
