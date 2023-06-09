import {TestBed} from '@angular/core/testing';

import {GamecontrollerService} from './gamecontroller.service';

describe('GamecontrollerService', () => {
  let service: GamecontrollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamecontrollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
