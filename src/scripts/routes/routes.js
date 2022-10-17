import HomeRestaurant from '../views/pages/home-restaurant';
import DetailRestaurant from '../views/pages/detail-restaurant';
import FavouriteRestaurant from '../views/pages/favourite-restaurant';

const routes = {
  '/': HomeRestaurant,
  '/home': HomeRestaurant,
  '/favourite': FavouriteRestaurant,
  '/detail/:id': DetailRestaurant,
};

export default routes;
