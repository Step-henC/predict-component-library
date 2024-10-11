import { TestBed } from '@angular/core/testing';

import { PredictionsComponentLibraryService } from './predictions-component-library.service';

describe('PredictionsComponentLibraryService', () => {
  let service: PredictionsComponentLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredictionsComponentLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
