import { async } from 'regenerator-runtime'; ////----------------- :(
// import { search } from 'core-js/fn/symbol';
import { API_URL } from './config.js';
import { AJAX } from './helper.js'
export const state = {
    recipe: {},
    search: {
        query: '' ,
        results:[] ,

    }
};



export const loadRecipe = async function (id) {
    try {
        //---data API---
        const data = await AJAX(`${API_URL}/${id}`)

        const { recipe } = data.data;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
        };
        console.log(state.recipe);
    } catch (err) {
        console.error(`${err} **`);

    }
}

export const loadSearchResults = async function (query) {
    try {
        state.search.query= query;
        const data = await AJAX(`${API_URL}/?search=${query} `);
        state.search.results = data.data.recipe.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                publisher: recy.publisher,
                image: rec.image_url,
            }
            console.log(state.search.results);
            
        })
    } catch (err) {

    }
}
// contrilRecipe()
// init()