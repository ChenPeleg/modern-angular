import {TestBed} from '@angular/core/testing';

import {AsteroidPositionService} from './asteroid-position.service';

describe('AsteroidPositionService', () => {
  let service: AsteroidPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsteroidPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
