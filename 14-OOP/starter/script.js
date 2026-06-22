'use strict';

// SECTION Constructor functions and the new operator
/* const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this, never create a method inside a constructor function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
// what happens when we use the new operator
// 1. A new empty object is created
// 2. The function is called, and the this keyword is set to the new empty object
// 3. The new object is linked to a prototype
// 4. The function automatically returns the new object
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';
console.log(jay instanceof Person); // false
console.log(jonas instanceof Person); // true */
// SECTION Prototypes
/* console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

Person.prototype.species = 'Homo Sapiens';
console.log(jonas);
console.log(jonas.species);

console.log(jonas.hasOwnProperty('species')); // false
console.log(jonas.hasOwnProperty('firstName')); // true */
// TODO Coding challenge #1
/* const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const car1 = new Car('BMW', 120);
car1.accelerate();
car1.brake();

const car2 = new Car('Mercedes', 95);
car2.accelerate();
car2.brake(); */
// SECTION ES6 classes
/* // class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);
jessica.calcAge();

PersonCl.prototype.greet = function () {
  console.log(`Hello ${this.firstName}!`);
};
jessica.greet();

// NOTE
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode */
// SECTION Setters and getters
/* const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);

account.latest = 50;
console.log(account.movements); */
// SECTION Object.create
/* const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge(); */
// TODO Coding challenge #2
/* class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
ford.accelerate();
ford.accelerate();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford); */
// SECTION Inheritance between "classes": constructor functions
/* const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// Linking prototypes NOTE it's important to do this before adding methods to the prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge(); */
// TODO Coding challenge #3
/* const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`,
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.accelerate();
tesla.accelerate();
// tesla.brake(); */
// SECTION Inheritance between "classes": ES6 classes
/* class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hello ${this.fullName}!`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // Always needs to happen first!
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm a student and I'm ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10}.`,
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge(); */
// SECTION Inheritance between "classes": Object.create
/* const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const jay = Object.create(StudentProto); // prototype chain: jay --> StudentProto --> PersonProto
jay.init('Jay', 2010, 'Computer Science');
jay.calcAge();
jay.introduce(); */
// SECTION Another class example
/* class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// acc1.movements.push(250);
// acc1.movements.push(-140); // bad practice to manipulate the movements array directly, we should use the deposit and withdraw methods instead
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1.movements); */
// SECTION Encapsulation: protected properties and methods
/* class Account {
  locale = navigator.language; // public field (instance property)
  bank = 'Bankist';
  #movements = []; // private field (instance property)
  #pin; // private field (instance property)

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.#movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface (API)
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.deposit(300).withdraw(100).requestLoan(1000).getMovements(); // this will not work because the methods do not return the account object, we need to return this in each method to make it chainable. To make the methods chainable, we need to return this in each method. For example:
/* deposit(val) {
  this.#movements.push(val);
  return this;
} */

//console.log(acc1);
// TODO Coding challenge #4
/* class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`,
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
rivian.accelerate().accelerate().brake().chargeBattery(50).accelerate(); */
