const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

// xhr.onreadystatechange = function () {
//   //   console.log(xhr.readyState);
//   if (xhr.readyState === 4) {
//     const response = xhr.response;
//     const data = JSON.parse(response); // convert string to js object
//     console.log(data);
//   }
// };

// 2nd method

xhr.onload = function () {
  //   console.log(xhr);
  const response = xhr.response;
  //   console.log(typeof response);
  const data = JSON.parse(response);
  console.log(data);
  //   console.log(typeof data);
};

xhr.send();
