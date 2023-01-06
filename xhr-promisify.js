//---> 3:10 -->YT video

const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("something went wrong"));
      }
    };
    xhr.onerror = () => {
      reject(alert("Something went wrong"));
    };

    xhr.send();
  });
}

// const whatisthis = sendRequest("GET", URL);
// console.log(whatisthis);

sendRequest("GET", URL)
  .then((response) => {
    const data = JSON.parse(response);
    // console.log(data);
    return data;
  })
  .then((data) => {
    // console.log(data);
    const id = data[9].id;
    return id;
  })
  .then((id) => {
    console.log(id);
    const URL2 = `${URL}/${id}`;
    console.log(URL2);
    return sendRequest("GET", URL2);
  })
  .then((response2) => {
    const data2 = JSON.parse(response2);
    console.log(data2);
  })
  .catch((error) => {
    console.log(error);
  });

// Using Promise chaining  now i can play with the data however i want and the code also stays short and understandable
// ek baar tune promisify kardia toh jitna man chahe utna chaining kar sakta hai
