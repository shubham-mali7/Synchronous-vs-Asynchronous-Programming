// Post method

const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL, {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => {
    // console.log(response)
    if (response.ok) {
      const data = response.json();
      return data;
    } else {
      throw new Error("Something went wrong");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("inside catch");
    console.log(error);
  });

// GET Method --> data ko read karte vakta
// POST method --> data ko create karte vakta
