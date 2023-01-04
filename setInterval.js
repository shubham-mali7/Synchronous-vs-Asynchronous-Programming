// setInterval

// console.log("script start");

// setInterval(() => {
//     let total = 0;
//   for (let i = 0; i < 1000000000; i++){
//     total = total + i;
//   }
//   console.log(total);
//   console.log(Math.random());
// }, 1000);

// console.log("script end");

// Jyada vishwas nahi rakhna hai set timeout or setInterval pai

// --------------------------------------------------------

// my try

const body = document.body;
const button = document.querySelector("button");

const intervalId = setInterval(() => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  body.style.backgroundColor = `rgb(${red},${green},${blue})`;
  //   console.log(body.style.backgroundColor);
}, 1000);

button.addEventListener("click", () => {
  clearInterval(intervalId);
  button.textContent = body.style.backgroundColor;
});
