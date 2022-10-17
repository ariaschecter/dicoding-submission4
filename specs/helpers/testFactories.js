/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/llike-button-presenter';
import FavouriteRestaurantIdb from '../../src/scripts/data/favourite-restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (data) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavouriteRestaurantIdb,
    data,
  });
};

export { createLikeButtonPresenterWithRestaurant };
