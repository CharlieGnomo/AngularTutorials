import { TestBed, inject } from '@angular/core/testing';

import { InteractService } from './interact.service';

describe('InteractService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InteractService]
    });
  });

  it('should be created', inject([InteractService], (service: InteractService) => {
    expect(service).toBeTruthy();
  }));
});
