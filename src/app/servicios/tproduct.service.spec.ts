import { TestBed } from '@angular/core/testing';

import { TproductService } from './tproduct.service';

describe('TproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TproductService = TestBed.get(TproductService);
    expect(service).toBeTruthy();
  });
});
