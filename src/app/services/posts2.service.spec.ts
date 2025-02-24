import { TestBed } from '@angular/core/testing';

import { Posts2Service } from './posts2.service';

describe('Posts2Service', () => {
  let service: Posts2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Posts2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
