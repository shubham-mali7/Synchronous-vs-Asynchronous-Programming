export class Person {
  constructor(firstName, lastName, age, profession) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.profession = profession;
  }

  info() {
    console.log(`${this.firstName} is ${this.profession} by profession`);
  }
}

export class Person2 {
  constructor(firstName, lastName, age, profession) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.profession = profession;
  }

  info() {
    console.log(`${this.firstName} is ${this.profession} by profession`);
  }
}

// ek file mai ek he default export kar sakte hai
// duplicate export nahi kar sakte default ka
// ek file kelie ek he export default rahega
// import export 2 prakar ke hote hai ek named or ek default

const hello = "hello boyyyyy";
export default hello;

// export import karte vakt ye important hai ki hum script file (type : module) kare
