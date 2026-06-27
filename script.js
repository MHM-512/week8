'use strict';


// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}
///////////////////////////////////////
///////////////////////////////////////

/* 
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 2000);
    });
};

Promise = pending , fulfilled , reject , resolve ;
rekect(error)

const imgContainer = document.querySelector('.images');

// it's function resolve , reject 
const createImage = (imgPath) => {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img')
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.append(img)
            resolve(img);
        })
        img.addEventListener('error', function () {
            reject(new Error('Imge not finde'))
        })
    })
}

//-------------------
let currentImg;

createImage('img/img-1.jpg')

    .then(img => {
        currentImg = img;
        console.log('imge 1 loaded');
        return wait(2);

    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('img/img-2.jpg');
    })
    .then(() => {
        currentImg.style.display = 'none';
    })
    .catch(err => console.error(err))
 */

///////////////////////////////////////
///////////////////////////////////////

// const requset = new XMLHttpRequest();
// requset.open('GET','https://restcountries.com/v3.1/name/italy')
//   requset.send();
// console.log(requset.responseText);

// //   requset.addEventListener('load', Function(){
//     // const 

// //   })
// const request1 = fetch ('https://restcountries.com/v2/name/portugal')
// console.log(request1);
// const url='https://jsonplaceholder.typicode.com/posts';

// fetch(url)
// .then(function (res){
//     if(!res.ok)
//     {

//     }
//    return res.json();
// })
// .then(function(data){
//     for(let i=0;i < 5 ; i++)
//     {
//         console.log(data[i].title);
//     }
// })
// .catch(error  => {
//     console.log(error);
// });
//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------


// const renderCountry = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   });
// };
// //-----------
// //-----------
// //-----------
// //-----------
// //-----------
// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://jsonplaceholder.typicode.com/posts`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://jsonplaceholder.typicode.com/posts`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// renderCountry()
// // getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
// // /////
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => { 
//     const s = res.json(); 
//     console.log(s);

// })


//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------

///////////
// const getCountry = function (countryName) {
//     fetch(
//         'https://restcountries.com/v3.1/name/canada',
//         { headers: { 'Authorization': 'Bearer rc_live_d9ffb1d741464d889314f08d0b26b537' } }
//     )
//         .then(function (response) {
//             if (!response.ok) throw new Error('مشکلی در دریافت اطلاعات پیش آمد');
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data); // تمام اطلاعات کشور در اینجا چاپ می‌شود

//             // مثال: نمایش نام رسمی کشور در کنسول
//             console.log("نام رسمی:", data[0].names.official);
//         })
//         .catch(err => console.error("خطا:", err.message));
// };

// فراخوانی تابع برای یک کشور خاص
//getCountry('canada');


///////////////////////////////////////
// const getCountry = function (countryName) {

// fetch(
//     'https://restcountries.com/v3.1/name/${countryName}'
//     )

// .then(function (response) {

// if (!response.ok) throw new Error('571');

// return response.json();

// })

// .then(function (data) {

// console.log(data); // تمام اطلاعات کشور

// console.log('58', data[0].name.official); // دسترسی به نام رسمی

// })

// .catch(err => console.error('25', err.message));

// };

// getCountry('canada');
///////////////////////////////////////
// const API_KEY = 'rc_live_d9ffb1d741464d889314f08d0b26b537';
// // آدرس باید این باشد:
// const BASE_URL = 'https://api.restcountries.com/countries/v5'; 

// async function getCountryData(countryName) {
//     try {
//         const response = await fetch(`${BASE_URL}?q=${countryName}`, {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${API_KEY}`
//             }
//         });

//         if (!response.ok) throw new Error(`خطا: ${response.status}`);

//         const data = await response.json();

//         // این API آرایه برمی‌گرداند، پس داده اول را می‌گیریم
//         renderCountry(data[0]);

//     } catch (error) {
//         console.error('خطا:', error.message);
//     }
// }

// function renderCountry(country) {
//     const html = `
//         <article class="country">
//             <img src="${country.flag.url_png}" width="200" />
//             <div class="data">
//                 <h2>${country.names.common}</h2>
//                 <p>جمعیت: ${(country.population / 1000000).toFixed(1)} میلیون</p>
//                 <p>پایتخت: ${country.capitals[0].name}</p>
//             </div>
//         </article>
//     `;
//     document.body.insertAdjacentHTML('beforeend', html);
// }

// getCountryData('italy');
//----------------------------------------------------------------------------------------
// const API_KEY = 'rc_live_d9ffb1d741464d889314f08d0b26b537';
// // اضافه کردن پروکسی به ابتدای آدرس
// const BASE_URL = 'https://corsproxy.io/?https://api.restcountries.com/countries/v5'; 

// async function getCountryData(countryName) {
//     try {
//         const response = await fetch(`${BASE_URL}?q=${countryName}`, {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${API_KEY}`
//             }
//         });

//         if (!response.ok) throw new Error(`خطا در شبکه: ${response.status}`);

//         const data = await response.json();
//         renderCountry(data[0]);

//     } catch (error) {
//         console.error('خطای ارتباط:', error.message);
//     }
// }

// const apiKey = 'Authorization: Bearer rc_live_demo';
// const apiUrl = 'https://api.restcountries.com/countries/v5/code/CA?pretty=1';

// const requestOptions = {
//   method: 'GET',
//   headers: {
//     'Authorization': `Bearer ${apiKey}`,
//   },
// };

// fetch(apiUrl, requestOptions)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     outputElement.textContent = JSON.stringify(data, null);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// const request = new XMLHttpRequest();
// request.open('GET', `https://api.restcountries.com/countries/v5/names.common/Canada`);

// // اول تعیین می‌کنیم وقتی جواب آمد چه شود
// request.addEventListener('load', function() {
//     console.log(this.responseText); // نمایش نتیجه در کنسول
// });

// // حالا درخواست را واقعاً ارسال می‌کنیم
// request.send();


// const response = fetch(
//     'curl "https://api.restcountries.com/countries/v5?q=Canada&limit=1&pretty=" -H "Authorization: Bearer rc_live_d9ffb1d741464d889314f08d0b26b537"'
//     // { headers: 'Authorization: Bearer rc_live_demo' }
// );
// // const payload = response.json();
// console.log(response);


/*
curl "https://api.restcountries.com/countries/v5?limit=1&pretty=1" \
  -H "Authorization: Bearer rc_live_demo"

*/
// console.log(fetch('curl "https://api.restcountries.com/countries/v5?q=Canada&limit=1&pretty=" -H "Authorization: Bearer rc_live_d9ffb1d741464d889314f08d0b26b537"'));

//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------

//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// const url = 'https://countriesnow.space/api/v0.1/countries';

// fetch('https://countriesnow.space/api/v0.1/countries')
//   .then(res => res.json())
//   .then(data => console.log(data.data))
//   .catch(err => console.error(err))
// // .then(response => {
//   if (!response.ok) throw new Error('خطا در احراز هویت یا شبکه');
//   return response.json();
// })
// .then(data => console.log(data))

//.catch(err => console.error('خطا:', err));

//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------

// const renderCountry = (data) => {
//   const html = ` <article class="country">
//           <img class="country__img" src="${data.country ?? '*'}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.country ?? '*'}</h3>
//             <h4 class="country__region">${data.iso2 ?? '*'}</h4>
//             <p class="country__row"><span>👫</span>*</p>
//             <p class="country__row"><span>🗣️</span>*</p>
//             <p class="country__row"><span>💰</span>*</p>
//           </div>
//         </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
// }
/*
const getCountry = async  countryName =>{
try{
  const res = await frtch (
    'https://countriesnow.space/api/v0.1/countries'
  )
  const data = await res.json();

    const country = data.data.find(
      item => item.country.toLowerCase() === countryName.toLowerCase()
    );
}
}
getCountry('United States');


const request = new XMLHttpRequest();
request.open('GET', 'https://countriesnow.space/api/v0.1/countries');
request.send();

request.addEventListener('load', function () {
  console.log(this.responseText);
  // const data = JSON.parse(this.responseText)
  // console.log(data);
  // const dataFlag = data.country
  // console.log(dataFlag);


})
countriesContainer.computedStyleMap.opacity = 1
*/

// const request = fetch('https://countriesnow.space/api/v0.1/countries')
//   .then(function (response) {
//     console.log(response);
//     return response.json();

//   })
//   .then(function (data) {
//     console.log(data);
//     renderCountry(data)
//   })
// console.log(request);
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------


// const renderCountry = data => {
//   const html = `
//     <article class="country">
//       <div class="country__data">
//         <h3 class="country__name">${data.country ?? '*'}</h3>

//         <h4 class="country__region">
//           ISO2: ${data.iso2 ?? '*'}
//         </h4>

//         <p class="country__row">
//           <span>👫</span>
//           *
//         </p>

//         <p class="country__row">
//           <span>🗣️</span>
//           *
//         </p>

//         <p class="country__row">
//           <span>💰</span>
//           *
//         </p>

//         <p class="country__row">
//           <span>🏙️</span>
//           ${data.cities?.length ?? '*'} Cities
//         </p>
//       </div>
//     </article>
//   `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);

// };

// const getCountry = async countryName => {
//   try {
//     const response = await fetch(
//       'https://countriesnow.space/api/v0.1/countries'
//     );

//     const result = await response.json();

//     const country = result.data.find(
//       c => c.country.toLowerCase() === countryName.toLowerCase()
//     );

//   //   if (!country) {
//   //     throw new Error('Country not found');
//   //   }

//   //   renderCountry(country);

//   // } catch (err) {
//   //   console.error(err);

//   //   countriesContainer.insertAdjacentHTML(
//   //     'beforeend',
//   //     `<p>${err.message}</p>`
//   //   );
//   }
// };
// btn.addEventListener('click', () => {
//   getCountry('Portugal');
// });

// const getAllCountries = async () => {
//   const response = await fetch(
//     'https://countriesnow.space/api/v0.1/countries'
//   );

//   const result = await response.json();

//   result.data.forEach(renderCountry);
// };

// getAllCountries();
// countriesContainer.style.opacity = 1
// ///////--------------------------------------------------------///
// // const html = `
// <article class="country">

//           <div class="country__data">
//             <h3 class="country__name">COUNTRY</h3>
//             <h4 class="country__region">REGION</h4>
//             <p class="country__row"><span>👫</span>POP people</p>
//             <p class="country__row"><span>🗣️</span>LANG</p>
//             <p class="country__row"><span>💰</span>CUR</p>
//           </div>
//         </article>
// `
// countriesContainer.insertAdjacentHTML('beforeend' , html)
// countriesContainer.style.opacity = 1
/* 

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


const getcutrentData = () => {
  fetch('countries.json')
    .then(response => response.json())
    .then(data => {
      console.log(data.data[0]);
      console.log(data);
      // data.data.forEach(country => {
      //   renderCountry(country);

      // });
      renderCountry(data.data[0]);

    });

  //---data 2
  fetch('countries.json')
    .then(response => response.json())
    .then(data => {
      renderCountry(data.data[4], 'neighbour');

    });
}
// .then(response => {
//   if (!response.ok) {
//     console.log('something went wrong');
//   } else {
//     console.log('submit');
//   }

// })

const renderCountry = (data) => {
  const html = ` <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1
}
// fetch('./countries.json')
//   .then(response => response.json())
//   .then(data => {
//     data.data.forEach(country => {
//       renderCountry(data);
//     });
//   });
btn.addEventListener('click', function () {
  getcutrentData()
})


let result = await response;

let country = result.data.find(
  c => c.country.toLowerCase() === countryName.toLowerCase()
);

if (!country) {
  throw new Error('Country not found');
}

renderCountry(country);
 */
// .catch (err) {
//   console.error(err);

//   countriesContainer.insertAdjacentHTML(
//     'beforeend',
//     `<p>${err.message}</p>`
//   );
// }
//----//
// let result = await response.json();
// let countryName = result.data.find(
//   c => c.country.toLowerCase() === country.toLowerCase
// )

// if (!country) {
//   throw new Promise((resolve, reject) => {

//   })
// }

///--------1--------------best 
 
async function getUserData() {
    try {
        const response = await fetch('https://api.example.com/user');
        
        // چک کردن اینکه آیا پاسخ سرور اوکی بوده یا نه (مثلاً خطای 404 یا 500)
        if (!response.ok) {
            throw new Error(`مشکل در شبکه: ${response.status}`);
        }

        const data = await response.json();
        return data; // خروجی نهایی
    } catch (error) {
        // مدیریت خطا در همین جا یا پرتاب کردن به مرحله بعد
        console.error("خطای دریافت دیتا:", error.message);
        throw error; 
    }
}

// نحوه استفاده حرفه‌ای:
async function init() {
    try {
        const user = await getUserData();
        console.log("کاربر دریافت شد:", user);
    } catch (err) {
        console.log("عملیات با شکست مواجه شد.");
    }
}

init();


///--------2--------------
/*  
const myPromise = new Promise(async (resolve, reject) => { // اضافه شدن async اینجا الزامی است
    try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        resolve(data); // حتماً باید resolve را صدا بزنید تا پرامیس با موفقیت پایان یابد
    } catch (error) {
        reject(error); // حتماً باید reject را صدا بزنید تا خطا به catch منتقل شود
    }
});

// نحوه استفاده:
myPromise
    .then(data => console.log(data))
    .catch(err => console.error(err));
///////////////////////////////////////////////////////
//-set timeout 
const myPromise = new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
        if (success) {
            resolve("عملیات با موفقیت انجام شد! 🎉");
        } else {
            reject("متأسفانه خطایی رخ داد. ❌");
        }
    }, 2000);
});

*/


// -------------------- try catch

