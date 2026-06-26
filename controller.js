import * as model from './model.js';

 //Handles the loading and rendering of a single recipe

const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);
    console.log(`🌐 Hash ID: ${id}`); 

    if (!id) return;
    recipeView.renderSpinner();
    console.log('🔄 Recipe spinner rendered.'); 

    //Highlight selected search result and update bookmarks
    resultsView.update(model.getSearchResultsPage());
    console.log('📄 Search results updated.'); 
    bookmarksView.update(model.state.bookmarks);
    console.log('🔖 Bookmarks view updated.'); 

    //Fetch recipe data from API
    console.log(`⏳ Loading recipe with ID: ${id}...`); 
    await model.loadRecipe(id);
    console.log('✅ Recipe loaded successfully from API.'); 

    //  Render the recipe on the screen
    recipeView.render(model.state.recipe);
    console.log('✨ Recipe rendered on the screen.'); 
  } catch (err) {
    console.error(`🔴 Recipe Controller Error: ${err}`); 
    recipeView.renderError();
    console.log('❌ Recipe render error called.'); 
  }
};


 // Handles search functionality and initial pagination

const controlSearchResults = async () => {
  try {
    const query = searchView.getQuery();
    console.log(`🔍 Search Query: "${query}"`); 

    if (!query) {
      console.log('⚠️ No search query entered.');
      return;
    }

    resultsView.renderSpinner();
    console.log('🔄 Search results spinner rendered.');

    //Load search results from API
    console.log(`⏳ Loading search results for "${query}"...`);
    await model.loadSearchResults(query);
    console.log(`✅ Search results for "${query}" loaded successfully. Total results: ${model.state.search.results.length}`); 
    // Render initial page of results and pagination buttons
    resultsView.render(model.getSearchResultsPage());
    console.log('📄 Initial search results page rendered.'); 
    paginationView.render(model.state.search);
    console.log('🔢 Pagination buttons rendered.');
  } catch (err) {
    console.error(`🔴 Search Controller Error: ${err}`);
  }
};

//--------------------------------


//Handles adding or removing a bookmark for the current recipe

const controlAddBookmark = () => {

 // Toggle bookmark status in the state
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
    
    console.log(`🔖 Bookmark added for recipe ID: ${model.state.recipe.id}`);
  } else {
    model.deleteBookmark(model.state.recipe.id);
    console.log(`🚫 Bookmark removed for recipe ID: ${model.state.recipe.id}`);
  }

  // Update recipe view to show bookmark status
  recipeView.update(model.state.recipe);
  console.log('✨ Recipe view updated with bookmark status.');


  //Re-render the bookmarks dropdown list
  bookmarksView.render(model.state.bookmarks);

};


//Renders the bookmarks list on initial page load

const controlBookmarks = () => {
  bookmarksView.render(model.state.bookmarks);
  console.log(`📚 Initial bookmarks list rendered. Total bookmarks: ${model.state.bookmarks.length}`); 
};

// Exporting handlers (if you are using the Publisher-Subscriber pattern)
export {
  controlRecipes,
  controlSearchResults,
  controlPagination,
  controlServings,
  controlAddBookmark,
  controlBookmarks,
};
