/* eslint-disable no-undef */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavouriteRestaurantIdb from '../src/scripts/data/favourite-restaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavouriteRestaurantIdb.getAllARestaurants()).forEach(async (movie) => {
      await FavouriteRestaurantIdb.deleteRestaurant(movie.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavouriteRestaurantIdb);
});
