// Function returning promise

function ricePromise() {
  const bucket = ["chips", "coffee", "vegetables", "rice", "salt"];

  const friedRicePromise = new Promise((resolve, reject) => {
    if (
      bucket.includes("vegetables") &&
      bucket.includes("rice") &&
      bucket.includes("salt")
    ) {
      resolve("Fried Rice");
    } else {
      // reject("Couldn't do it");
      reject(new Error("Something missing from the bucket"));
    }
  });
}

ricePromise()
  .then(
    // jab promise resolve hoga
    (myFriedRice) => {
      console.log("lets eat", myFriedRice);
    }
  )
  // jab promise reject hoga
  .catch((error) => {
    console.log(error);
  });
