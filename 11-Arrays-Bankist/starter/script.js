'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ''; // this clears the container before adding new movements

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements; // this creates a copy of the movements array and sorts it in ascending order if sort is true, otherwise it uses the original movements array

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1; // only include interest that is at least 1€
    })
    .reduce((acc, cur) => acc + cur, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // display movements
  displayMovements(acc.movements);

  // display balance
  calcDisplayBalance(acc);

  // display summary
  calcDisplaySummary(acc);
};

// event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault(); // this prevents the form from submitting and reloading the page

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value,
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const reveriverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value,
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  // check if the transfer amount makes sense
  if (
    amount > 0 &&
    reveriverAcc &&
    currentAccount.balance >= amount &&
    reveriverAcc?.username !== currentAccount.username
  ) {
    // doing the transfer
    currentAccount.movements.push(-amount);
    reveriverAcc.movements.push(amount);
  }

  // update the UI
  updateUI(currentAccount);
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);
  }

  // update the UI
  updateUI(currentAccount);
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username,
    );
    // delete account
    accounts.splice(index, 1);

    // hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////
//SECTION simple array methods
/* let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2));
// splice
//console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr.splice(1, 2)); //(start, deleteCount)
console.log(arr);
// reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); // the reverse method mutates the original array
// concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // using spread operator
// join
console.log(letters.join(' - ')); */
// SECTION the new at method
/* const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
console.log(arr.at(-1)); // last element
console.log('jonas'.at(0));
console.log('jonas'.at(-1)); */
// SECTION looping arrays: forEach
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
movements.forEach(function (movement, i, arr) { // the order of parameters is important, the first parameter is the current element, the second parameter is the index, and the third parameter is the entire array
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}); */
// SECTION forEach with Maps and Sets
/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
// set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
currenciesUnique.forEach(function (value, _, map) {
  // the second parameter is the same as the first parameter because sets do not have keys, so we can use _ to indicate that we are not using it
  console.log(`${value}: ${value}`);
}); */
//TODO coding challenge #1
/* const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(1, -2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is a puppy, and is ${dog} years old`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]); */
//SECTION data transformations: map, filter, reduce
/* // the map method creates a new array by calling a provided function on every element in the calling array
const eurToUsd = 1.1;
const movementsUSD = account1.movements.map(function (mov) {
  return mov * eurToUsd;
});
//const movementsToUsd = account1.movements.map( mov => mov * eurToUsd); // using arrow function
console.log(account1.movements);
console.log(movementsUSD); */
//SECTION filter method creates a new array with all elements that pass the test implemented by the provided function
/* const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits); */
//SECTION reduce method executes a reducer function on each element of the array, resulting in a single output value
/* console.log(movements);
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0); // the initial value of the accumulator
// const balance = movements.reduce ((acc, cur) => acc + cur, 0); // using the arrow function
console.log(balance);

// maximum value
const max = movements.reduce(function (acc, mov) {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]); // the initial value of the accumulator is the first element of the array
console.log(max);
// const max = movements.reduce((acc, mov) => (acc > mov ? acc : mov), movements[0]); */
//TODO coding challenge #2
/* const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(function (age) {
    if (age <= 2) {
      return age * 2;
    } else {
      return 16 + age * 4;
    }
  });

  const adults = humanAges.filter(function (age) {
    return age >= 18;
  });

  const average =
    adults.reduce(function (acc, age) {
      return acc + age;
    }, 0) / adults.length;

  console.log(average);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]); */
//SECTION chaining methods
/* const eurToUsd = 1.1;
const totalDeposotUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalDeposotUSD); */
//TODO coding challenge #3
/* const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); */
//SECTION the find method
/* const firstWithdrawl = movements.find(mov => mov < 0);
console.log(firstWithdrawl);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account); */
//SECTION the findLast and findLastIndex methods
/* console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

// `Your latest large movement was X movements ago`
const latestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) > 1000,
);
console.log(latestLargeMovementIndex);
console.log(
  `Your latest large movement was ${movements.length - latestLargeMovementIndex} movements ago`,
); */
//SECTION some and every
/* console.log(movements);
console.log(movements.includes(-130)); // check for equality
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0); // check for condition
console.log(anyDeposits);

console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit)); */
//SECTION flat and flatMap
/* const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
const allMovements = accountMovements.flat();
console.log(allMovements);
const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

const overallBalance2 = accounts
  .flatMap(acc => acc.movements) // flatMap is a combination of map and flat, it maps each element and then flattens the result
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2); */
//SECTION sorting arrays
/* // strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);
// numbers
console.log(movements);
//console.log(movements.sort()); // this sorts the numbers as strings, which is not what we want

// ascending order; return < 0, a , b(keep order); return > 0, b , a(switch order);
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements); */
//SECTION array grouping
/* console.log(movements);

const groupedMovements = Object.groupBy(movements, mov =>
  mov > 0 ? 'deposits' : 'withdrawals',
);
console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, acc => {
  const movementCount = acc.movements.length;

  if (movementCount >= 8) return 'very active';
  if (movementCount >= 4) return 'active';
  if (movementCount >= 1) return 'moderate';
  return 'inactive';
});
console.log(groupedByActivity);

//const groupedAccounts = Object.groupBy(accounts, acc => acc.type);
const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);
console.log(groupedAccounts); */
//SECTION more ways of creating and filling arrays
/* const arr = [1, 2, 3, 4, 5, 6, 7];
const x = new Array(7); // creates an array with 7 empty slots
console.log(x);

//x.fill(1);
x.fill(1, 3, 5); // fills the array with 1 from index 3 to index 5 (not including index 5)
console.log(x);

const y = Array.from({ length: 7 }, () => 1); // creates an array with 7 elements and fills it with 1
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1); // creates an array with 7 elements and fills it with the index + 1
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', '')),
  ); // creates an array from the NodeList returned by querySelectorAll and maps it to an array of numbers
  console.log(movementsUI);
}); */
//SECTION non-destructive array methods
/* console.log(movements);

const reversedMov = movements.toReversed();
console.log(reversedMov);
console.log(movements);

// toSorted, toSpliced

// movements[1] = 2000;
const newMovements = movements.with(1, 2000);
console.log(newMovements);
console.log(movements); */
//SECTION array methods practice
/* const bankDeposiitSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDeposiitSum);

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length; // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);

console.log(numDeposits1000);

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 },
  );
console.log(sums);

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE')); */
//TODO coding challenge #5
/* // test data
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// 1. Calculate recommended food portion
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);
// 2. Find Sarah's dog and log whether it's eating too much or too little
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahsDog);
console.log(
  `Sarah's dog is eating too ${
    sarahsDog.curFood > sarahsDog.recFood ? 'much' : 'little'
  }`,
);
// 3. Create arrays of owners of dogs who eat too much and who eat too little
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);
// 4. Log a string for each array created in 3.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
// 5. Log whether there is any dog eating exactly the amount of food that is recommended (just true or false)
console.log(dogs.some(dog => dog.curFood === dog.recFood));
// 6. Log whether there is any dog eating an okay amount of food (current > recFood * 0.90 && current < recFood * 1.10)
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));
// 7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.)
console.log(dogs.filter(checkEatingOkay));
// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted); */
//
