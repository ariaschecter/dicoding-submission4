/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favourite');
});

// Scenario('showing empty liked movies', ({ I }) => {
//   I.seeElement('#query');
//   // I.seeElement('.query'); // membuat test menjadi gagal
//   I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');
// });

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');

  I.seeElement('h4 a');

  const firstFilm = locate('h4 a');
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.seeElement('h4 a');
  const likedFilmTitle = await I.grabTextFrom('h4 a');

  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');

  I.seeElement('h4 a');

  const firstFilm = locate('h4 a');
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');

  I.seeElement('h4 a');

  const likedRestaurant = locate('h4 a');
  I.click(likedRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favourite');
  I.see('Tidak ada Restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
