import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img class="lazyload resto-item__header__poster" alt="${resto.name}"
            data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <p>${resto.city}</p>        
        <h3><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
        <p>${resto.description}</p>
    </div>
  </div>
  `;

const createRestoDetailTemplate = (detail) => `
  <div class="detail">
    <div>
      <div>
        <img class="lazyload img-res2" alt="image ${detail.name}" data-src="${
  CONFIG.BASE_IMAGE_URL_SMALL + detail.pictureId
}" crossorigin="anonymous"/>
        <h3>${detail.name}</h3>      
    <ul class="detail-info">
      <li><span>${detail.address}, ${detail.city}</span></li>
      <li><span><i title="ratings" class="fa fa-star"></i>&emsp;${detail.rating}</span></li>
      <li><p class="truncate2"> ${detail.description}</p></li>
      <li><p class="truncate2">Category:</p> ${detail.categories.map(
    (category) => `
                <span class="category">${category.name}</span>
              `,
  )
    .join('')}
      </li>
    </ul>
    </div>
    </div>
    <h3>Menu</h3>
    <div class="detail-menu grid-2">
      <div class="detail-food">
        <h4>Food</h4>
        <ul>
          ${detail.menus.foods.map(
    (food) => `
                <li>${food.name}</li>
              `,
  )
    .join('')}
        </ul>
      </div>
      <div class="detail-drink">
        <h4>Drink</h4>
        <ul>
          ${detail.menus.drinks.map(
    (food) => `
                            <li>${food.name}</li>
                          `,
  )
    .join('')}
        </ul>
      </div>
    </div>
    <h3 class="title-review">Reviews</h3>
    <div class="detail-review grid-3">
      ${detail.customerReviews
    .map(
      (review) => `
          <div class="detail-review-item">
            <div class="review-header">
              <p class="review-name"><i title="restaurant"  style="font-size:1.3em;"></i>&nbsp;${review.name}</p>
              <p class="review-date">${review.date}</p>
            </div>
            <div class="review-body">
              ${review.review}
            </div>
          </div>
        `,
    )
    .join('')}
          
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart fa-2x" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
