import { TestBed } from '@angular/core/testing';

import { Servicoexec } from './service.service';


describe('Servicoexec', () => {
  let service: Servicoexec;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicoexec);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
