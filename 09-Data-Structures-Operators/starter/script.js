'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`,
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

/* const {
  name: restaurantName,
  menu = [],
  openingHours: hours = [],
} = restaurant;
console.log(restaurantName, menu, hours);

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

const { fri: { open, close } = {} } = restaurant.openingHours;
console.log(open, close);
 */

//SECTION spread operator ...
//NOTE iterables: arrays, strings, maps, sets. NOT objects
/* const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
 */
//SECTION rest pattern and parameters
/* const [a, b, ...others] = [1, 2, 3, 4, 5]; //rest pattern on left side of assignment
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); */
//SECTION short circuiting (&& and ||), the nullish coalescing operator (??)
//SECTION logical assignment operators
/* const rest1 = {
  name: 'Capri',
  numGuests: 20,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1);
console.log(rest2); */
//SECTION looping arrays: the for-of loop
/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, item] of menu.entries()) {
  console.log(`${i + 1}: ${item}`);
} */
//SECTION enhanced object literals
//NOTE property value shorthand, method definitions, computed property names
//SECTION optional chaining (?.)
/* console.log(restaurant.openingHours.mon?.open); */
//SECTION looping objects: object keys, values, and entries
/* const properties = Object.keys(restaurant.openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

const values = Object.values(restaurant.openingHours);
console.log(values);

const entries = Object.entries(restaurant.openingHours);
console.log(entries); */
//SECTION sets
/* const name = new Set('Elaine');
console.log(name);

console.log(italianFoods.size);
console.log(italianFoods.has('pasta'));
italianFoods.add('shit');
italianFoods.delete('shit');

console.log(italianFoods);

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);

const staffArray = [...staffUnique];
console.log(staffArray);
 */
//SECTION sets, new
/* const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods);
console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(italianMexicanFusion);

const uniqueItalian = italianFoods.difference(mexicanFoods);
console.log(uniqueItalian);

const uniques = italianFoods.symmetricDifference(mexicanFoods);
console.log(uniques); */
//SECTION maps, key-value pairs but not limited to the same type
/* const rest = new Map();
rest.set('name', 'Capri');
rest.set(1, 'Italian');
rest.set(2, 'Mexican');
console.log(rest);

rest
  .set('categories', ['Italian', 'Mexican', 'Vegetarian'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(1));
console.log(rest.get(true));
console.log(rest.get(false));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
//rest.clear();
const arr = [6, 7];
rest.set(arr, 'Test');
console.log(rest.get(arr));
 */
//SECTION maps iteration
//convert object to map
/* console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap); */
//SECTION working with strings - part 1
/* const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(airline.length);
console.log('B737'.length);
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(-2)); //start from the end of the string
console.log(airline.slice(1, -1)); */
/* //replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

const plane = 'A320neo';
console.log(plane.includes('A320'));
console.log(plane.startsWith('Air'));
console.log(plane.endsWith('neo')); */
/* console.log('a+very+nice+string'.split('+'));
const [firstName, lastName] = 'Elaine Zhang'.split(' ');
console.log([firstName, lastName]);

const newName = ['Ms', firstName, lastName.toUpperCase()].join('-');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpperInitials = [];

  for (const n of names) {
    namesUpperInitials.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpperInitials.join(' '));
};
capitalizeName('jessica ann smith davis');
//padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '!').padEnd(30, '!'));

const maskeCreditCard = function (number) {
  const str = number + '';
  const last4 = str.slice(-4);
  return last4.padStart(str.length, '*');
};
console.log(maskeCreditCard(43378463864647384));
//repeat
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5)); */
