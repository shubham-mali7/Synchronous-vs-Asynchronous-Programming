// Promise.resolve
// Promise chaining

// const myPromise = Promise.resolve(5);
// myPromise.then(value =>{
//     console.log(value);
// })

// then()
// then method hamesha promise return karta hai
// sirf promise pai he then laga sakte hain kisi string pai then nahi laga sakte

// Promise chaining

function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("foo");
  });
}

myPromise()
  .then((value) => {
    console.log(value);
    value += "baar"; //  value = value + "baar";
    return value; //--> internally js is performing this ==> return Promise.resolve(value)
  })

  .then((value) => {
    console.log(value);
    value += "baaz";
    return value;
  })

  .then((value) => {
    console.log(value);
  });
