// helper.js - start
import { async } from "regenerator-runtime";
import { timeout_SEC } from "./config";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// export const getJSON = async function (url) {
//     try {
//         const fetchpro = await fetch(url)
//         const res = await Promise.race([fetchpro , timeout(timeout_SEC)])
//         const data = await res.json();
//         if (!res.ok) throw new Error(`${data.message} (${res.status})`);
//         return data;
//         console.log(res, data);
//     } catch (err) {
//         throw err;
//     }
// }
/// \/

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(uploadData),
      })
      : fetch(url);
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }

};
// helper.js - end
// controller.js - start
import * as model from './model.js';
// import recipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

// import { forEach } from 'core-js/core/array';


const recipeContainer = document.querySelector('.recipe');



// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io
//-----------------------------------
//rrnder spinner 

///////////////////////////////////////
// loding recipe
const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);
    
    if (!id) return;
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    //-------------------------
    // _generateMarkup
    //spinner-----
    recipeView.renderSpinner();

    // resultsView.update(model.getSearchResultsPage());

    //bookmarksView

    //--loading Recipe 1
    await model.loadRecipe(id);
    const { recipe } = model.state;

    //--rendering recipe 2
    recipeView.render(model.state.recipe);
    //****** */
     resultsView.render(model.state.search.results)
    // resultsView.generateMarkup(model.state.search.results)
    //****** */ 
    console.log("دیتای دریافت شده از مدل:", model.state.recipe); ////////----------------
  } catch (err) {
    recipeView.renderError(`${err}  **`);
  }
};


// controlRecipes()
const controlSearchResult = async function () {
  try {
    resultsView.renderSpinner()
    
    await model.controlSearchResult(newRecipe);
    console.log(model.state. recipe);
    recipeView.renderMessage();
    
    // recipeView.render(model.state.)

  }
  catch (err) {
    console.log(err);
  }
}

// ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipes));  ///-------^^
// window.addEventListener('hashchange' , controlRecipes)
// window.addEventListener('load' , controlRecipes)
const init = () => {
  recipeView.addHandlerRender(controlRecipes)
  searchView.addHandlerSearch(controlSearchResults);
}
init()
console.log('fs');
// controller.js - end

// recipView.js - start
// import fracty from 'fracty';
 // import {fraction} from 'fractional';
import View from './Views';


// console. (fraction);


class RecipeView extends View {
  _parentElement = document.querySelector('.recipe');
  _errorMessage= 'We could not find that recipe. Please try another one!'
  _Message= '' ;

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  renderError() {
    const markup = `
      <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
          `
          this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  //addHandlerUpdateServings()
  //addHandlerAddBookmark()
  // addHandlerRende()
  // #renderSpinner()
  #generateMarkup() {

    return `

        <figure class="recipe__fig">
          <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="${icons}#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="${icons}#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="${icons}#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this.#generateMarkupIngredient)}
          
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`;


  }
  #generateMarkupIngredient(ing) {
    return `
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${icons}#icon-check"></use>
              </svg>
             <div class="recipe__quantity">${ing.quantity ? ing.quantity : ''}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
                ${ing.description}
              </div>
            </li>
            `;
  }
}
export default new RecipeView();
// recipView.js - end

//resultsView.js - start
// import icons from 'url:../../img/icons.svg';
import recipeView from './recipeView.js';
import View from './Views';
class resultsView extends View {
    _parentElement = document.querySelector('.results');

    _generateMarkup(){
        return this._data.map(this._generateMarkupreview).join()
    }
    _generateMarkupreview(){
        return`
        <li class="preview">
            <a class="preview__link preview__link--active" href="#23456">
              <figure class="preview__fig">
                <img src="src/img/test-1.jpg" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">Pasta with Tomato Cream ...</h4>
                <p class="preview__publisher">The Pioneer Woman</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="src/img/icons.svg#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
        `
    }


};

export default new resultsView();
//resultsView.js - end
//searchView.js - start
class searchView {
    _parentEl = document.querySelector('.search');

    getQuery() {
        const query = this._parentEl.querySelector('.search__field').value;
        this._clearInput();
        return query;
    }

    _clearInput() {
        this._parentEl.querySelector('.search__field').value = '';
    }

    addHandlerSearch(handler) {
        this._parentEl.addEventListener('submit', function (e) {
            e.preventDefault();
            handler();
        });
    }



}

export default new searchView();
//searchView.js - end
//config.js - start
export const API_URL = 'https://forkify-api.jonas.io/api/v2/recipes/';
export const TIMEOUT_SEC = 10;
export const RES_PER_PAGE = 10;
export const KEY = '<YOUR_KEY>';
export const MODAL_CLOSE_SEC = 2.5;
//config.js - ende

