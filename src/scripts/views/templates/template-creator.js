import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="card">
      <img class="lazyload card__img" src="${CONFIG.BASE_IMG_URL.MEDIUM}/${restaurant.pictureId}" alt="Gambar dari ${restaurant.name}">
      <div class="star__img">${restaurant.rating} <i class="fas fa-star"></i></div>
      <div class="location__img"><i class="fas fa-location-dot"></i> ${restaurant.city}</div>
      <a href="#/detail/${restaurant.id}"><h4 class="h4">${restaurant.name}</h4></a>
    </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="hero mb">
      <img src="${CONFIG.BASE_IMG_URL.MEDIUM}/${restaurant.pictureId}" alt="Gambar dari ${restaurant.name}" class="hero__img">
  </div>
  <div class="container-detail" id="main-content">
      <h1 class="main__title" id="detail__name">${restaurant.name} <span class="rating">${restaurant.rating}<i class="fas fa-star gold"></i></span></h1>
        <h3>${restaurant.address} - ${restaurant.city}</h3>
      <p class="center">${restaurant.description}</p>
      <h3>Menu Makanan</h3>
      <h4 id="foodMenu"></h4>
      <h3>Menu Minuman</h3>
      <h4 id="drinkMenu"></h4>
      <h1>Reviews</h1>
      <div class="center">
        <table id="reviews" class="table"></table>
      </div>

      <div class="center" id="form-input">
        <label for="name">Enter your name:</label>
        <input id="name"/>
        <label for="review">Enter your review:</label>
        <input id="review"/>
        <button type="submit" class="submit" id="submit">Submit</button>
      </div>
  </div>
`;

const createRestaurantReviewTemplate = (review) => `
  <tr>
    <td>${review.name}</td>
    <td>${review.review}</td>
    <td>${review.date}</td>
  </tr>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
