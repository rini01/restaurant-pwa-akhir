const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async({ I }) => {
    I.seeElement('#restos');
    I.see('Favorite restaurant still empty', '.empty-favorite-tag');

    I.amOnPage('/');
    I.seeElement('.resto-item__content h3 a');
    const firstRestaurant = locate('.resto-item__content h3 a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.resto-item');
    const likedRestaurantTitle = await I.grabTextFrom('.resto-item__content h3 a');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

});

Scenario('unliking one restaurant', async({ I }) => {
    I.amOnPage('/');
    I.seeElement('.resto-item__content h3 a');
    I.click(locate('.resto-item__content h3 a').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.resto-item');
    I.click(locate('.resto-item__content h3 a'));

    I.seeElement('[aria-label="unlike this restaurant"]');
    I.click('[aria-label="unlike this restaurant"]');

    I.amOnPage('/#/favorite');
    I.see('Favorite restaurant still empty', '.empty-favorite-tag');

});
