import { TestBed } from '@angular/core/testing';

import { JokeserviceService } from './jokeservice.service';

describe('JokeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JokeserviceService = TestBed.get(JokeserviceService);
    expect(service).toBeTruthy();
  });
});
