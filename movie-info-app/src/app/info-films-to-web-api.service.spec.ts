import { TestBed } from '@angular/core/testing';

import { InfoFilmsToWebApiService } from './info-films-to-web-api.service';

describe('InfoFilmsToWebApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoFilmsToWebApiService = TestBed.get(InfoFilmsToWebApiService);
    expect(service).toBeTruthy();
  });
});
