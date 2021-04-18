import { TestBed } from '@angular/core/testing';

import { RestaurantService } from './restaurant.service';

describe('RasturantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantService = TestBed.get(RestaurantService);
    expect(service).toBeTruthy();
  });
});
