// error handelling

const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
    const id = data[9].id;
    const URL2 = `${URL}/${id}`;
    const xhr2 = new XMLHttpRequest();
    console.log(URL2);
    xhr2.open("GET", URL2);
    xhr2.onload = () => {
      const data2 = JSON.parse(xhr2.response);
      console.log(data2);
    };
    xhr2.send();
  } else {
    console.log("something went wrong");
  }
};
xhr.onerror = () => {
  alert("network error");
};

xhr.send();
