// Understanding xhr

// step1) using xmlhttp request create an object
// Bydefault request of browser is GET
// JSON mai jo object hai uske key value pairs ko double quotes mai likhna is compulsory

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
// console.log(xhr);
// step 1
// console.log(xhr.readyState);
xhr.open("GET", URL); // ye kaam browser karega (asynchronously)
// console.log(xhr.readyState);

// xhr.onreadystatechange = function () {
//   //   console.log(xhr);
//   if (xhr.readyState === 4) {
//     console.log(xhr);
//     const response = xhr.response;
//     const data = JSON.parse(response); // converts string into javascript object
//     console.log(data);
//   }
// };

xhr.onload = function () {
  const response = xhr.response;
  const data = JSON.parse(response);
  console.log(data);
};

xhr.send();
