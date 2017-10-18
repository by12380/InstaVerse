/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VerseParserService } from './verse-parser.service';

describe('Service: VerseParser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerseParserService]
    });
  });

  it('should ...', inject([VerseParserService], (service: VerseParserService) => {
    expect(service).toBeTruthy();
  }));
});