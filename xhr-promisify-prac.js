const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error("Something went wrong"));
      }
    };

    xhr.onerror = () => {
      reject(alert("Something went wrong"));
    };

    xhr.send();
  });
}

sendRequest("GET", URL)
  .then((response) => {
    const data = JSON.parse(response);
    return data;
  })
  .then((data) => {
    const id = data[8].id;
    const URL2 = `${URL}/${id}`;
    // console.log(data);
    return sendRequest("GET", URL2);
  })
  .then((response2) => {
    const data2 = JSON.parse(response2);
    return data2;
  })
  .then((data2) => {
    console.log(data2);
  })
  .catch((error) => {
    console.log(error);
  });
