/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StudySheetService } from './studysheet.service';

describe('Service: Studysheet', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudySheetService]
    });
  });

  it('should ...', inject([StudySheetService], (service: StudySheetService) => {
    expect(service).toBeTruthy();
  }));
});