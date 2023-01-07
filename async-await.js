// Async / Await
// Bhai ye toh code or bhi short kardeta hai , then ko bhi nikaldeta hai
// Behind the scenes vahi kaam hora hoga bas syntax change hojaega
// agar mai function se pehle async lagado toh vo function normal nahi raha kyuki ab uus function ko har baar call karne pai vo promise return karega
// error handelling is required in async await also

// const URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(URL)
//   .then((response) => {
//     if (response.ok) {
//       const data = response.json();
//       return data;
//     } else {
//       throw new Error("Something went wrong");
//     }
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Error occured");
//     console.log(error);
//   });

//---------------> using Async - Await

// agar mai function se pehle async lagado toh vo function normal nahi raha kyuki ab uus function ko har baar call karne pai vo promise return karega
console.log(`script start - "to ckeck asynchronous nature"`);

const URL = "https://jsonplaceholder.typicode.com/posts";

// async function getPosts() {
//   const response = await fetch(URL);
//   if (!response.ok) {
//     // if response.ok is false
//     throw new Error("Something went wrong");
//   }
//   const data = await response.json();
//   return data;
// }

// async in arrow function ---------->

const getPosts = async () => {
  const response = await fetch(URL);
  if (!response.ok) {
    // if response.ok is false
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  return data;
};

getPosts()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("error occured");
    console.log(error);
  });

console.log(`script end - "to ckeck asynchronous nature"`);

// const returnedCheck = getPosts();
// console.log(returnedCheck);
