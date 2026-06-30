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
///

export const AJAX = async function (url,uploadData = undefined) {
  try{
    const fetchPro = uploadData
    ?fetch(url , {
      method: 'post', 
      headers:{
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