import { TestBed } from '@angular/core/testing';

import { ActiveJobsService } from './active-jobs.service';

describe('ActiveJobsService', () => {
  let service: ActiveJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
