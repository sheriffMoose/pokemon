import { TestBed } from '@angular/core/testing';

import { ListGuard } from './list.guard';

describe('ListService', () => {
  let service: ListGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
