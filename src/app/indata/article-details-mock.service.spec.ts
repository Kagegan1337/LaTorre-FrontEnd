import { TestBed } from '@angular/core/testing';

import { ArticleDetailsMockService } from './article-details-mock.service';

describe('ArticleDetailsMockService', () => {
  let service: ArticleDetailsMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleDetailsMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
