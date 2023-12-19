import { TestBed } from '@angular/core/testing';

import { ArticleMockService } from './article-mock.service';

describe('ArticleMockService', () => {
  let service: ArticleMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
