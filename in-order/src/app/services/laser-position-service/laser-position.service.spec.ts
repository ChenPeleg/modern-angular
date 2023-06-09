import {TestBed} from '@angular/core/testing';

import {LaserPositionService} from './laser-position.service';

describe('LaserPositionService', () => {
  let service: LaserPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaserPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
