import FavoriteRestoIdb from "../../data/Restaurant-idb";
import {createRestoItemTemplate} from "../templates/template";
import '../component/empty-favorite-component';

const Favorite = {
    async render() {
        return `
            <div class="content">
              <h2 class="content__heading">Favorite Restaurants</h2>
              <div id="restos" class="restos">
         
              </div>
            </div>
         `;
    },

    async afterRender() {
        const restos = await FavoriteRestoIdb.getAllRestos();
        const restosContainer = document.querySelector('#restos');
        if (restos.length>0){
            restos.forEach((resto) => {
                restosContainer.innerHTML += createRestoItemTemplate(resto);
            });
        }else{
            restosContainer.innerHTML = '<empty-favorite></empty-favorite>';
        }
    },
};

export default Favorite;
