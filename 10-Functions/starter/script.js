'use strict';

//SECTION default parameters
/* const bookings = [];

const createBooking = function (
  flightNum,
  NumPassengers = 1,
  price = 199 * NumPassengers,
) {
  // ES5
  // NumPassengers = NumPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    NumPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);*/
//SECTION how passing arguments works: value vs reference
/* //NOTE js does not have pass by reference, it has pass by value, but for objects the value is a reference to the object (memory address or something like that), so it behaves like pass by reference
const flight = 'LH234';
const elaine = {
  name: 'Elaine',
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mrs. ' + passenger.name;

  if (passenger.passport === 123456789) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, elaine);
console.log(flight);
console.log(elaine); */
//SECTION functions accepting callback functions
/* const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord); */
//SECTION functions returning functions
/* const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Elaine');

greet('Hello')('Elaine'); */
//SECTION the call and apply methods
/* const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Elaine');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// does not work
// book(23, 'Sarah Williams');
// call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings.bookings);
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa.bookings);
// apply method
const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData);
console.log(eurowings.bookings);
// same as call method
book.call(eurowings, ...flightData);
console.log(eurowings.bookings); */
//SECTION the bind method
/* //book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23); //partial application, pre-setting the first argument
bookEW23('John Smith');

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// with partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); //pre-setting the first argument to 0.23, the this keyword is not used in the addTax function, so we can set it to null
console.log(addVAT(100));

//challenge
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100)); */
//TODO coding challenge #1 a simple polling app
/* const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`,
      ),
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//bonus
poll.displayResults.call({ answers: [5, 2, 3] }, 'string'); */
//SECTION immediately invoked function expressions (IIFE)
/* (function () {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))(); */
//SECTION closures
/* const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker); */
//more closure examples
/* let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
// Re-assigning f function
h();
f(); */
//TODO coding challenge #2
/* (function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})(); */
//
