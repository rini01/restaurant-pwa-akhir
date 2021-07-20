import RestaurantSource from "../../data/Restaurant-source";
import {createRestoItemTemplate} from "../templates/template";

const Home = {

    async render() {
        return `
          <div class="content">
            <h2 class="content__heading">Restaurant Explore</h2>
            <div id="restos" class="restos">
            </div>
          </div>
        `;
    },

    async afterRender() {
        const restos = await RestaurantSource.list();
        const restoContainer = document.querySelector('#restos');
        restos.forEach((resto) => {
            restoContainer.innerHTML += createRestoItemTemplate(resto);
        });

    },
};

export default Home;