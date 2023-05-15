import { TestBed } from '@angular/core/testing';

import { CreatorlistService } from './creatorlist.service';

describe('CreatorlistService', () => {
  let service: CreatorlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatorlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
