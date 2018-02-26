import { TestBed, inject } from '@angular/core/testing';

import { FiledataService } from './filedata.service';

describe('FiledataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiledataService]
    });
  });

  it('should be created', inject([FiledataService], (service: FiledataService) => {
    expect(service).toBeTruthy();
  }));
});
