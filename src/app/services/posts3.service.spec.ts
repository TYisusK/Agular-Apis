import { TestBed } from '@angular/core/testing';

import { Posts3Service } from './posts3.service';

describe('Posts3Service', () => {
  let service: Posts3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Posts3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
