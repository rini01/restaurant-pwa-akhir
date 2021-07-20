import RestaurantSource from '../../data/Restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import {createRestoDetailTemplate} from "../templates/template";

const Detail = {
  async render() {
    return `
          <div id="resto" class="resto"></div>
          <div class="like" id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detail(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    await LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        city: resto.city,
        description: resto.description,
        address: resto.address,
        rating: resto.rating,
        pictureId: resto.pictureId,
      },
    });
  },
};

export default Detail;
