import { TestBed } from '@angular/core/testing';

import { TrainAvailService } from './train-avail.service';

describe('TrainAvailService', () => {
  let service: TrainAvailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainAvailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
