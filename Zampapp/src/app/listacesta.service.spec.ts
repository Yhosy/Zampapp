import { TestBed, inject } from '@angular/core/testing';

import { ListacestaService } from './listacesta.service';

describe('ListacestaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListacestaService]
    });
  });

  it('should be created', inject([ListacestaService], (service: ListacestaService) => {
    expect(service).toBeTruthy();
  }));
});
