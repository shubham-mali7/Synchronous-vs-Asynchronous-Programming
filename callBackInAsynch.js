// callbacks, callback hell, pyramid of doom
// asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading");

// Callback Hell-------- many nested callbacks which is problematic

// setTimeout(() => {
//   heading1.textContent = "one";
//   heading1.style.color = "violet";
//   setTimeout(() => {
//     heading2.textContent = "two";
//     heading2.style.color = "Purple";
//     setTimeout(() => {
//       heading3.textContent = "three";
//       heading3.style.color = "red";
//       setTimeout(() => {
//         heading4.textContent = "four";
//         heading4.style.color = "pink";
//         setTimeout(() => {
//           heading5.textContent = "five";
//           heading5.style.color = "green";
//           setTimeout(() => {
//             heading6.textContent = "six";
//             heading6.style.color = "blue";
//             setTimeout(() => {
//               heading7.textContent = "seven";
//               heading7.style.color = "brown";
//             }, 1000);
//           }, 3000);
//         }, 2000);
//       }, 1000);
//     }, 2000);
//   }, 2000);
// }, 1000);

// Prmises are used to prevent callback hell
// jabtak promise nahi tha tabtak log call back he use karte the

function changeText(
  element,
  text,
  color,
  time,
  onSuccessCallback,
  onFailureCallback
) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    } else {
      if (onFailureCallback) {
        onFailureCallback();
      }
      console.log("Your element does not exist!!");
    }
  }, time);
}

// pyramid of doom

changeText(
  heading1,
  "one",
  "red",
  1000,
  () => {
    changeText(
      heading2,
      "two",
      "green",
      2000,
      () => {
        changeText(
          heading3,
          "three",
          "blue",
          2000,
          () => {
            changeText(
              heading4,
              "four",
              "violet",
              1000,
              () => {
                changeText(
                  heading5,
                  "five",
                  "cyan",
                  1000,
                  () => {
                    changeText(
                      heading6,
                      "six",
                      "pink",
                      1000,
                      () => {
                        changeText(
                          heading7,
                          "seven",
                          "brown",
                          2000,
                          () => {
                            console.log("All done till 7");
                          },
                          () => {
                            console.log("heading7 is not present");
                          }
                        );
                      },
                      () => {
                        console.log("heading6 is not present");
                      }
                    );
                  },
                  () => {
                    console.log("heading5 is not present");
                  }
                );
              },
              () => {
                console.log("heading4 is not presesnt");
              }
            );
          },
          () => {
            console.log("heading3 is not present");
          }
        );
      },
      () => {
        console.log("heading2 is not present");
      }
    );
  },
  () => {
    console.log("heading1 is not present");
  }
);

// pyramid of doom (google ki bhasha mai)
// A pyramid of doom is a block of code that is so nested that you give up trying to mentally digest it. It usually comes in the form of a function within a function within a function within a function of some sort.

// agar kahi kuch error aaraha ho toh uskelie bhi hum callback use karte hai to dekho kitni jhanjhat hai !!
