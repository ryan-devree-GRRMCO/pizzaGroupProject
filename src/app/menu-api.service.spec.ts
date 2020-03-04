import { TestBed } from '@angular/core/testing';

import { MenuAPIService } from './menu-api.service';

describe('MenuAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuAPIService = TestBed.get(MenuAPIService);
    expect(service).toBeTruthy();
  });
});
