// Promise --------> Very important topic

// Promise ek aisi value hai jo hame abhi nahi pata but hume future mai patah hogi
// promise represent karta hai future value jo hume abhi nahi pata but badme pata chalegi

console.log("script start");

setTimeout(() => {
  console.log("Hello before promise");
}, 1000);

const bucket = ["chips", "coffee", "vegetables", "rice", "salt"];

const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("rice") &&
    bucket.includes("salt")
  ) {
    resolve("Fried Rice");
  } else {
    // reject("Couldn't do it");
    reject(new Error("Something missing from the bucket"));
  }
});

// produce

// Consume
// How to Consume (Very Crusial)
// As a javascript developer you will consume more promise as compared to producing a promise
// Promise ko consume browser karega or uska result dega hamare object friedRicePromise ke andar
// Promise add hote hai microtask queue mai
// settimeout setinterval vagera callback queue mai add hoti hai

// myFriedRice in then method will get the resolved value above
friedRicePromise
  .then(
    // jab promise resolve hoga
    (myFriedRice) => {
      console.log("lets eat", myFriedRice);
    }
  )
  // jab promise reject hoga
  .catch((error) => {
    console.log(error);
  });

setTimeout(() => {
  console.log("Hello from setTimeOut");
}, 1000);

for (let i = 0; i < 100; i++) {
  console.log(Math.floor(Math.random() * 200), i);
}

console.log("script end");

// script end hone ke badh he browser promise vala kaam karke js engine ko call stack ko dega

// callback queue or microtask queue ki comparison mai microtask queue ko jyada priority dee jati hai islea microtask queue pehle execute hota hai

// ye behaviour sabh browsers mai same rehega
