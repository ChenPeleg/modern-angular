import {TestBed} from '@angular/core/testing';

import {ReorderPositionsService} from './reorder-positions.service';

describe('ReorderPositionsService', () => {
  let service: ReorderPositionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReorderPositionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
