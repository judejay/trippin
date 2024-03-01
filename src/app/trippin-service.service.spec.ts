import { TestBed } from '@angular/core/testing';

import { TrippinService } from './trippin.service';

describe('TrippinServiceService', () => {
  let service: TrippinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrippinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
