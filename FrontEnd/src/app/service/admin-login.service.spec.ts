import { TestBed, inject } from '@angular/core/testing';

import { AdminLoginService } from './admin-login.service';

describe('AdminLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminLoginService]
    });
  });

  it('should be created', inject([AdminLoginService], (service: AdminLoginService) => {
    expect(service).toBeTruthy();
  }));
});
