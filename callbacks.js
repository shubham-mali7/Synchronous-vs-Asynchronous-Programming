// understanding Callback
// callback functions are mostly used in asynchronous programs

// function myFunc(callback) {
//   console.log("handelling Task 1");
//   callback();
// }
// function myFunc2() {
//   console.log("handelling Task 2");
// }

// myFunc(myFunc2);

// ----------------------------------

// function myFunc1(callback){
//     console.log("Func1 is main");
//     callback(myFunc3);
// }

// function myFunc2(callback2){
//     console.log("Func2 is after func1");
//     callback2();
// }

// function myFunc3(){
//     console.log("I am func3");
// }

// myFunc1(myFunc2);

//------------------------------------------Practise

// function myFunc1(callback) {
//   console.log("I am func1");
//   callback(myFunc3);
// }
// function myFunc2(callback2) {
//   console.log("I am func2");
//   callback2();
// }
// function myFunc3() {
//   console.log("I am func3");
// }

// myFunc1(myFunc2);

// ---------------------------------------example 2

function getTwonumbersAndAdd(num1, num2, onSuccess, onFailure) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    onSuccess(num1, num2);
  } else {
    onFailure();
  }
}

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// getTwonumbersAndAdd(4, 5, addTwoNumbers);

const addTwoNums = (number1, number2) => {
  console.log(number1 + number2);
};

const onFail = () => {
  console.log("Wrong Data Type");
  console.log("Please Pass numbers only");
};

getTwonumbersAndAdd("4", 5, addTwoNums, onFail);
