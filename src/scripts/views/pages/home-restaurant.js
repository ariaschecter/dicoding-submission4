import CONFIG from '../../globals/config';
import RestaurantAppSource from '../../data/restaurant-app-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const HomeRestaurant = {
  async render() {
    return `
      <div class="hero mb">
        <picture>
          <source type="image/webp" srcset="./img/hero-image.webp" class="hero__img">
          <source media="(max-width: 1000px)" type="image/jpeg" srcset="./img/hero-image-small.jpg" class="hero__img">
          <img src="./img/hero-image-large.jpg" alt="Tampilan Hero Image" class="hero__img">
        </picture>
      </div>
      <h1 id="main-content" class="main__title">Explore Restaurant</h1>
      <div class="container">
        <div class="row" id="list__restaurants">
          
        </div>
      </div>
    `;
  },

  async afterRender() {
    document.querySelector('title').textContent = `Home | ${CONFIG.BASE_TITLE}`;
    const restaurants = await RestaurantAppSource.homeRestaurant();
    const restaurantContainer = document.querySelector('#list__restaurants');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default HomeRestaurant;
