// import { forEach } from "core-js/core/array";
// import 'core-js/stable';
// import { search } from "core-js/fn/symbol";
// import 'regenerator-runtime/runtime';
//////////////////////////////////////////////////////////////////////
const recipeContainer = document.querySelector('.recipe');
const pagination = document.querySelector('.search-results');
const search = document.querySelector('.search__field');
const searchBtn = document.querySelector('.search__btn');
const searchForm = document.querySelector('.search');
const resultsUl = document.querySelector('.results');
const paginationContainer = document.querySelector('.pagination');

/// this syte API : https://forkify-api.jonas.io
//https://forkify-api.jonas.io/api/v2/recipes?search=pizza

const API_URL = 'https://forkify-api.jonas.io/api/v2/recipes/';
const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: 12
    },
    bookmarks: [],
};
///----------time 
const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
///---getjson
const getJSON = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        console.log(err);
        console.error(err);
    }
};
/// rendering API 
const showRecipe = async function () {

    try {
        const ID = window.location.hash.slice(1);
        if (!ID) return;
        // renderSpinner(recipeContainer)

        //loading recipe 
        // const res = await fetch(`${API_URL}5ed6604591c37cdc054bc886`);
        // const res = await fetch(`${API_URL}?search=${ID}`);
        // const res = await fetch('https://forkify-api.jonas.io/api/v2/recipes?search=pizza')
        const data = await getJSON(`${API_URL}${ID}`);

        //  ۱. نمایش لودر در سمت راست قبل از دریافت داده‌ها

        // console test
        // console.log(data);
        let { recipe } = data.data;
        recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
        };
        // rendering recipe
        //---------- سمت راست سایت 
        const markup = `
        <figure class="recipe__fig">
          <img src="${recipe.image}" alt="recipe.title" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="src/img/icons.svg#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="src/img/icons.svg#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="src/img/icons.svg#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
          ${recipe.ingredients.map(ing => {
            return `
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${ing.quantity}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
                ${ing.description}
              </div>
            </li>
            `
        }).join('')}
            
              <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">0.5</div>
              <div class="recipe__description">
                <span class="recipe__unit">cup</span>
                ricotta cheese
              </div>
            </li>
          </ul>
        </div>
        

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${recipe.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
        `;
        recipeContainer.innerHTML = '';
        recipeContainer.insertAdjacentHTML('afterbegin', markup);
    } catch (err) {
        console.log(err);

        console.error(err);

    };
};

const renderSpinner = (parentEl) => {
    const markup = `
    <div class="spinner">
          <svg>
            <use href="src/img/icons.svg#icon-loader"></use>
          </svg>
    </div>
    `;
    parentEl.innerHTML = '';
    parentEl.insertAdjacentHTML('afterbegin', markup);
};

///----//--load search -- systemSearch ----//
const getSearchResultsPage = function (page = state.search.page) {
    state.search.page = page;

    const start = (page - 1) * state.search.resultsPerPage; // 0
    const end = page * state.search.resultsPerPage; // 10

    return state.search.results.slice(start, end);
};
const renderPagination = function (parentEl) {
     if (!paginationContainer) return; 

    const numPages = Math.ceil(state.search.results.length / state.search.resultsPerPage);
    const curPage = state.search.page;

    let markup = '';

    // منطق تولید دکمه‌ها (مثلاً اگر صفحه ۱ بود و صفحات دیگری هم بود)
    if (curPage === 1 && numPages > 1) {
        markup = `
            <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
                <span>Page ${curPage + 1}</span>
                <svg class="search__icon">
                    <use href="src/img/icons.svg#icon-arrow-right"></use>
                </svg>
            </button>`;
    }
    else if (curPage < numPages) {
        markup = `
          <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
          <button data-goto="${curPage + 1}" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </button>
        `;
    }
    else if (curPage === numPages && numPages > 1) {
        markup = `
          <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
        `;
    }
    
    paginationContainer.innerHTML = '';
    paginationContainer.insertAdjacentHTML('afterbegin', markup);
};

//-loadSearch
const renderSearchResults = function (results) {
     resultsUl.innerHTML = ''; // لیست قبلی را پاک کن
    results.forEach(rec => {
        const preview = `
        <li class="preview">
            <a class="preview__link" href="#${rec.id}">
              <figure class="preview__fig">
                <img src="${rec.image}" alt="${rec.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${rec.title}</h4>
                <p class="preview__publisher">${rec.publisher}</p>
              </div>
            </a>
          </li>
        `;
        resultsUl.insertAdjacentHTML('afterbegin', preview);
    });
};

const loadSearch = async (query) => {
    try {
        const data = await getJSON(`${API_URL}?search=${query}`);

        console.log(data);
        const { recipes } = data.data;
     

        state.search.results = recipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                publisher: rec.publisher,
                sourceUrl: rec.source_url,
                image: rec.image_url,
            };

        });
        // رندر کردن نتایج صفحه اول (۱۰ مورد اول)
        renderSearchResults(getSearchResultsPage(1));

        // رندر کردن دکمه‌ها
        renderPagination();
    } catch (err) {
        console.log(err);
        console.error(err);
    }
};

//----//-----fuction EventListener-----------//-------------
const controlSearchResults = async function (e) {
    try {
        // ۱. جلوگیری از رفرش شدن صفحه
        e.preventDefault();
        const query = search.value.trim();
        if (!query) return;

        // ۳. پاک کردن فیلد سرچ و خارج کردن فوکوس (blur)
        search.value = '';
        search.blur();

        // ۴. نمایش یک لودر در بخش نتایج (اختیاری ولی برای تجربه کاربری عالی است)
        renderSpinner(resultsUl);

        // ۵. صدا زدن تابع لود سرچ با کوئری جدید
        await loadSearch(query);

    } catch (err) {
        console.error(err);
    }
};
const pageHandler = (e)=> {
    const btn = e.target.closest('.btn--inline');
    if (!btn) return;
    const goToPage = +btn.dataset.goto; // دریافت شماره صفحه از دیتاست دکمه
    // ۱. رندر کردن نتایج صفحه جدید
    renderSearchResults(getSearchResultsPage(goToPage));
    // ۲. آپدیت کردن دکمه‌های صفحه‌بندی
    renderPagination();
};

//----//----- addEventListeners-----------//-------------
['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));
// گوش دادن به سابمیت فرم سرچ (هم با کلیک دکمه کار می‌کند هم با Enter)
searchForm.addEventListener('submit', controlSearchResults);
paginationContainer.addEventListener('click', pageHandler)

const init = () => {
    renderSpinner(recipeContainer);
    showRecipe();
};
init();

//----------test live
console.log('connected');
