import { TestBed } from '@angular/core/testing';

import { PaymetDetailsService } from './paymet-details.service';

describe('PaymetDetailsService', () => {
  let service: PaymetDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymetDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
