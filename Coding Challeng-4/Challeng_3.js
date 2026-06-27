// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.


*/
/* // ۱. انتخاب المنت کانتینر عکس‌ها از صفحه HTML (حتماً باید یک دایو با کلاس images در HTML داشته باشید)
const imgContainer = document.querySelector('.images');

// ۲. تعریف تابع کمکی wait برای ایجاد وقفه
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// ۳. تعریف تابع اصلی createImage (که در چالش قبل نوشتیم)
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// ==========================================
// بخش ۱ چالش جدید: استفاده از Async/Await
// ==========================================
// const loadNPause = async function () {
//   try {
//     // لود عکس اول و ۲ ثانیه توقف
//     let img = await createImage('img/img-1.jpg');
//     console.log('Image 1 loaded');
//     await wait(2);
//     img.style.display = 'none';

//     // لود عکس دوم و ۲ ثانیه توقف
//     img = await createImage('img/img-2.jpg');
//     console.log('Image 2 loaded');
//     await wait(2);
//     img.style.display = 'none';

//   } catch (err) {
//     console.error('⚠️ خطا در لود عکس‌ها:', err.message);
//   }
// };

// // اجرای بخش اول (برای تست، این را فعال نگه دارید)
// loadNPause();


// ==========================================
// بخش ۲ چالش جدید: لود همزمان با Promise.all
// ==========================================
const loadAll = async function (imgArr) {
  try {
    // ایجاد آرایه‌ای از پرومیس‌ها
    const imgs = imgArr.map(async img => await createImage(img));
    
    // انتظار برای اتمام همزمان تمام پرومیس‌ها
    const imgsEl = await Promise.all(imgs);
    console.log('تمام عکس‌ها همزمان لود شدند:', imgsEl);

    // اعمال کلاس موازی به عکس‌ها
    imgsEl.forEach(img => img.classList.add('parallel'));

  } catch (err) {
    console.error('⚠️ خطا در لود همزمان:', err.message);
  }
};

// برای تست بخش دوم، خط زیر را از حالت کامنت خارج کنید (و خط loadNPause بالا را کامنت کنید)
// loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']); */





const imgContainer = document.querySelector('.images') ;
let currentImg 
//------timer 

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    }); 
};

// create Image
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


const loadNPause = async function() {
  try {
    // لود عکس اول
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // لود عکس دوم
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(3);
    img.style.display = 'none';

  } catch (err) {
    console.error(err);
  }
};
loadNPause()


