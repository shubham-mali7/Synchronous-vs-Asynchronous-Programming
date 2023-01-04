// synchronous programming vs asynchronous programming

// console.log("script start");

// for (let i = 0; i < 10000; i++) {
//   console.log("inside for loop");
// }

// console.log("script end");

// setTimeout

// console.log("script start");

// setTimeout(() => {
//   console.log("inside settimeout");
// }, 10000); // ye function kum se kum 10sec badh call hoga

// console.log("script end");

// console.log("script start");

// setTimeout(() => {
//   console.log("inside settimeout");
// }, 0);

// for (let i = 0; i < 10000; i++) {
//   console.log("hahahaheheh....");
// }

// console.log("script end");

// aap aisa niyam bana sakte ho ki setTimeout mai jo bhi callback function hai vo execute puri ki puri file run hone ke badh he hoga bhale usko kitna bhi vakta lagjaae

console.log("script start");

const id = setTimeout(() => {
  console.log("inside settimeout");
}, 1000);

for (let i = 0; i < 100; i++) {
  console.log("hahahaheheh....");
}

console.log("setTimeout id is ", id);
console.log("clearing timeOut");
clearTimeout(id);
console.log("script end");
