// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
//-------------------------------------------------------------------------------
/*
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const describeChina = describeCountry('China', 1441, 'Beijing');
const describeIndia = describeCountry('India', 1393, 'New Delhi');
const describeUSA = describeCountry('USA', 331, 'Washington D.C.');

console.log(describeChina, describeIndia, describeUSA);
*/
//-------------------------------------------------------------------------------
// Function declaration
// function calculateAge1(birthYear) {
//     return 2024 - birthYear;
// }

// const age1 = calculateAge1(1991);
// console.log(age1);

// Function expression
// const calculateAge2 = function (birthYear) {
//     return 2024 - birthYear;
// };

// const age2 = calculateAge2(1996);
// console.log(age2);

// const worldPopulation = 7900;

// function percentageOfWorld1(population) {
//     return (population / worldPopulation) * 100;
// }

// const chinaPopulation = percentageOfWorld1(1441);
// const indiaPopulation = percentageOfWorld1(1393);
// const usaPopulation = percentageOfWorld1(331);

// console.log(chinaPopulation, indiaPopulation, usaPopulation);

// const percentageOfWorld2 = function (population) {
//     return (population / worldPopulation) * 100;
// };

// const chinaPopulation2 = percentageOfWorld2(1441);
// const indiaPopulation2 = percentageOfWorld2(1393);
// const usaPopulation2 = percentageOfWorld2(331);

// console.log(chinaPopulation2, indiaPopulation2, usaPopulation2);
//---------------------------------------------------------------------------------
// arrow function
// const calculateAge3 = birthYear => 2024 - birthYear;
// const age3 = calculateAge3(1996);
// console.log(age3); 

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2026 - birthYear;
//     const retirmentYears = 65 - age;
//     return `${firstName} retires in ${retirmentYears} years.`;
// }

// console.log(yearsUntilRetirement(1996, `Elaine`));
//-------------------------------------------------------------------------
// functions calling other functions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));
//---------------------------------------------------------------------------------
// const worldPopulation = 7900;

// function percentageOfWorld1(population) {
//     return (population / worldPopulation) * 100;
// }

// function describePopulation(country, population) {
//     const percentage = percentageOfWorld1(population);
//     return `${country} has ${population} million people, which is about ${percentage}% of the world.`
// }
// console.log(describePopulation(`China`, 1441));
// console.log(describePopulation(`India`, 1393));
// console.log(describePopulation(`USA`, 331));
//-----------------------------------------------------------------------------------
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log(`No team wins...`);
//     }
// }

// console.log(checkWinner(avgDolphins, avgKoalas));
//-----------------------------------------------------------------------------------
// const friends = ['Michael', 'Steven', 'Peter'];

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const calcAge = function (birthYear) {
//     return 2026 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);
//-----------------------------------------------------------------------------------
// const populations = [1441, 1393, 331, 83];

// console.log(populations.length === 4);

// function percentageOfWorld(population) {
//     return (population / 7900) * 100;
// }

// const percentages = [
//     percentageOfWorld(populations[0]),
//     percentageOfWorld(populations[1]),
//     percentageOfWorld(populations[2]),
//     percentageOfWorld(populations[3])
// ];

// console.log(percentages);
//-----------------------------------------------------------------------------------
//basic array operations (methods)
/*
const friends = ['Michael', 'Steven', 'Peter'];

const newLength = friends.push('Jay'); // add element to end of array
console.log(friends);
console.log(newLength);//push() has a built-in (default) return value:
//It returns the new length of the array after adding the element

friends.unshift('John'); // add element to beginning of array
console.log(friends);

friends.pop(); // remove last element of array
const popped = friends.pop(); // store the removed element in a variable
console.log(friends);
console.log(popped);//pop() also has a built-in return value: it returns the removed element

friends.shift(); // remove first element of array
console.log(friends);

console.log(friends.indexOf('Steven')); // returns the index of the first occurrence of the specified element, or -1 if not found
console.log(friends.indexOf('Bob')); // returns -1 because 'Bob' is not in the array

friends.push(23);
console.log(friends.includes('Steven')); // returns true if the element is found, false otherwise
console.log(friends.includes('Bob')); // returns false because 'Bob' is not in the array
console.log(friends.includes('23')); // returns true because 23 is in the array, '23' 
*/
//-------------------------------------------------------------------------------------------
//coding challenge #2
/* function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
}
//const tip = bill => bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total); */

//-------------------------------------------------------------------------------------------
//intro to objects
/* const elaine = {
    firstName: 'Elaine',
    lastName: 'Zhang',
    age: 2026 - 1996,
    job: 'Software Engineer',
    friends: ['Michael', 'Steven', 'Peter']
}; */
//-------------------------------------------------------------------------------------------
//dot vs. bracket notation
/* const elaine = {
    firstName: 'Elaine',
    lastName: 'Zhang',
    age: 2026 - 1996,
    job: 'Software Engineer',
    friends: ['Michael', 'Steven', 'Peter']
};

console.log(elaine.firstName);// dot notation
console.log(elaine['lastName']);// bracket notation

const nameKey = 'Name';
console.log(elaine['first' + nameKey]);// bracket notation with computed property name
console.log(elaine['last' + nameKey]);// bracket notation with computed property name

const interestedIn = prompt('What do you want to know about Elaine? Choose between firstName, lastName, age, job, and friends.');

if(elaine[interestedIn]) {
    console.log(elaine[interestedIn]);
} else {
    console.log('Invalid request!');
}

console.log(`${elaine.firstName} has ${elaine.friends.length} firends, and her best friend is called ${elaine.friends[0]}.`); */
/* const myCountry ={
    country: 'China',
    capital: 'Beijing',
    language: 'Chinese',
    population: 1441,
    neighbors: ['India', 'Russia', 'Mongolia']
};
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
myCountry['population'] -= 2; */
//-------------------------------------------------------------------------------------------
//object methods
/* const elaine = {
    firstName: 'Elaine',
    lastName: 'Zhang',
    birthYear: 1996,
    job: 'Software Engineer',
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2026 - birthYear;
    // }
    // calcAge: function () {
    //     return 2026 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2026 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};

console.log(elaine.calcAge());
console.log(elaine['calcAge']());
console.log(elaine.age);
console.log(elaine.getSummary()); */

/* const myCountry = {
    country: 'China',
    capital: 'Beijing',
    language: 'Chinese',
    population: 1441,
    neighbors: ['India', 'Russia', 'Mongolia'],

    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighbouring countries and a capital called ${this.capital}.`;
    },

    checkIsland: function () {
        this.Island = this.neighbors.length === 0 ? true : false;
    }
};

console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry.Island); */
//-------------------------------------------------------------------------------------------
//coding challenge #3
/* const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`);
} else {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`);
}; */
//-------------------------------------------------------------------------------------------------
//iteration: the for loop
/* for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
} */
/* for(let rep = 1; rep <= 50; rep++) {
    console.log(`Voter number ${rep} is currently voting 🗳️`);
} */
//-------------------------------------------------------------------------------------------------
//looping arrays, breaking and continuing
/* const elaineArray =[
    'Elaine',
    'Zhang',
    2026 - 1996,
    'Software Engineer',
    ['Michael', 'Steven', 'Peter']
];

const types = [];

for(let i = 0; i < elaineArray.length; i++) {
    console.log(elaineArray[i], typeof elaineArray[i]);
    types.push(typeof elaineArray[i]);
}
console.log(types); */
/* const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2026 - years[i]);
}
console.log(ages); */

/* const worldPopulation = 7900;

function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}

const populations = [10, 1441, 332, 83];
const percentages2 = [];

for(let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2); */
//-------------------------------------------------------------------------------------------------
//looping backwards and loops in loops
/* const elaine =[
    'Elaine',
    'Zhang',
    2026 - 1996,
    'Software Engineer',
    ['Michael', 'Steven', 'Peter']
];

for(let i = elaine.length - 1; i >= 0; i--) {
    console.log(i, elaine[i]);
} */

/* for(let excercise = 1; excercise <= 3; excercise++) {
    console.log(`----- Starting excercise ${excercise} ------`);

    for(let rep = 1; rep <= 5; rep++) {
        console.log(`Excercise ${excercise}: Lifting weights repetition ${rep} 🏋️‍♀️`);
    }
} */

/* const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for(let i = 0; i < listOfNeighbours.length; i++) {
    for(let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
} */

//-------------------------------------------------------------------------------------------------
//the while loop
/* for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}  */

/* console.log('--- WHILE LOOP ---');
let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
} */

/* let dice = Math.trunc(Math.random() * 6) + 1;

while (dice != 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('You rolled a 6! Loop is about to end...');
} */

//-------------------------------------------------------------------------------------------------
//coding challenge #4
/* const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log(calcAverage(totals)); */

