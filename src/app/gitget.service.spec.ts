import { TestBed } from '@angular/core/testing';

import { GitgetService } from './gitget.service';

describe('GitgetService', () => {
  let service: GitgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
