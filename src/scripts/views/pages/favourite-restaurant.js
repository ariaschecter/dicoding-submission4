import CONFIG from '../../globals/config';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import FavouriteRestaurantIdb from '../../data/favourite-restaurant-idb';

const FavouriteRestaurant = {
  async render() {
    return `
      <h1 id="main-content" class="main__title">Favourite Restaurant</h1>
      <div class="container">
        <div class="row" id="list__restaurants">
          
        </div>
      </div>
    `;
  },

  async afterRender() {
    document.querySelector('title').textContent = `Favourite | ${CONFIG.BASE_TITLE}`;
    const restaurants = await FavouriteRestaurantIdb.getAllARestaurants();
    const restaurantContainer = document.querySelector('#list__restaurants');
    console.log(restaurants);
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantContainer.innerHTML = '<h3 class="restaurant-item__not__found">Tidak ada Restaurant untuk ditampilkan</h3>';
    }
  },
};

export default FavouriteRestaurant;
