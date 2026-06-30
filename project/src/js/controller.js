import * as model from './model.js';
import recipeView from './views/recipeView.js';
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





