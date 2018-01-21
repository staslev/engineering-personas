import { TestBed, inject } from '@angular/core/testing';

import { QuestionsResolverService } from './questions-resolver.service';

describe('QuestionsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsResolverService]
    });
  });

  it('should be created', inject([QuestionsResolverService], (service: QuestionsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
