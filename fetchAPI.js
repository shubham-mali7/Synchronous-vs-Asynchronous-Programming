// fetch API

// fetch mai hame function likhne ke koi jarrorat nahi , fetch API hamare lie sabh kaam karke dega
// sirf ek line se hum request kar sakte hai
// fetch API bohot he badhiya cheej hai bhaiiiii
// bhai code toh ekdam short or understandable hogaya !!!!!!
// Promise should always be returned

const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL) //---> is ek line se sabh hogaya
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong");
    }
  })
  .then((data) => {
    return data;
  })
  .then((data) => {
    return data[9].id;
  })
  .then((id) => {
    const URL2 = `${URL}/${id}`;
    return fetch(URL2);
  })
  .then((response2) => {
    return response2.json();
  })
  .then((data2) => {
    return data2;
  })
  .then((data2) => {
    console.log(data2);
  })
  .catch((error) => {
    console.log("inisde catch");
    console.log(error);
  });
