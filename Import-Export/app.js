import { firstName } from "./utils/fname.js";
import { age } from "./utils/age.js";
import something, { Person, Person2 } from "./utils/person.js";

console.log(firstName, age);

const personinfo = new Person("Shubham", "Mali", 23, "Software-Engineer");
const personinfo2 = new Person2("Rohan", "Singh", 23, "Software-Tester");

console.log(personinfo);
personinfo.info();
personinfo2.info();
console.log(something);
// Now we are gonna import fname and age from other 2 js files

// jab html file mai type module karte hai toh defer apneaap set ho jata hai

// We can import and export anything (classes,const,var,object,array,let,functions...etc)

// export import karte vakt ye important hai ki hum script file (type : module) kare
