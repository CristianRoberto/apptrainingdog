import { TestBed } from '@angular/core/testing';

import { ProductTService } from './product-t.service';

describe('ProductTService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductTService = TestBed.get(ProductTService);
    expect(service).toBeTruthy();
  });
});
