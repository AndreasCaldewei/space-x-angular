import { TestBed } from '@angular/core/testing';

import { DragonsDataService } from './dragons-data.service';

describe('DragonsDataService', () => {
  let service: DragonsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
