import CONFIG from '../../globals/config';
import UrlParser from '../../routes/url-parser';
import RestaurantAppSource from '../../data/restaurant-app-source';
import { createRestaurantDetailTemplate, createRestaurantReviewTemplate } from '../templates/template-creator';
import API_ENDPOINT from '../../globals/api-endpoint';
import LikeButtonPresenter from '../../utils/llike-button-presenter';
import FavouriteRestaurantIdb from '../../data/favourite-restaurant-idb';

const DetailRestaurant = {
  async render() {
    return `
      <div id="restaurant"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    document.querySelector('title').textContent = `Detail | ${CONFIG.BASE_TITLE}`;
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantAppSource.detailRestaurant(url.id);
    const RestaurantContainer = document.querySelector('#restaurant');
    RestaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    const FoodMenu = document.querySelector('#foodMenu');
    const DrinkMenu = document.querySelector('#drinkMenu');
    const Reviews = document.querySelector('#reviews');
    const SubmitButton = document.querySelector('#submit');

    restaurant.menus.foods.forEach((food) => {
      FoodMenu.innerText += ` - ${food.name}`;
    });

    restaurant.menus.drinks.forEach((drink) => {
      DrinkMenu.innerText += ` - ${drink.name}`;
    });

    Reviews.innerHTML = `
      <tr>
          <th>Nama</th>
          <th>Review</th>
          <th>Date</th>
        </tr>
    `;
    restaurant.customerReviews.forEach((review) => {
      Reviews.innerHTML += createRestaurantReviewTemplate(review);
    });

    SubmitButton.addEventListener('click', async () => {
      const name = document.querySelector('#name');
      const kataKata = document.querySelector('#review');

      const review = {
        id: url.id,
        name: name.value,
        review: kataKata.value,
      };

      try {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(review),
        };

        await fetch(`${API_ENDPOINT.REVIEW}`, options);
        alert('Review Added');
        await this.render();
        await this.afterRender();
        console.log('Done');
      } catch (error) {
        console.log(error);
      }
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavouriteRestaurantIdb,
      data: restaurant,
    });
  },
};

export default DetailRestaurant;
