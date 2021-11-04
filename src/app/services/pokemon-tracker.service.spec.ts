import { TestBed } from '@angular/core/testing';

import { PokemonTrackerService } from './pokemon-tracker.service';

describe('PokemonTrackerService', () => {
  let service: PokemonTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
