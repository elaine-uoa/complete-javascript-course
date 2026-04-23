'use strict';
console.log('-------- Assignment 1 --------');

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

//TODO Destructuring Arrays
/* //1.1
const [firstBook, secondBook] = books;
//1.2
const [, , thirdBook] = books;
//1.3
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];
const [[, rating]] = ratings;
const [, [, ratingsCount]] = ratings; //const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
//1.4
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
 */
//TODO Destructuring Objects
/* //2.1
const { title, author, ISBM } = books[0];
//2.2
const { keywords: tags } = books[0];
//2.3
const { language, programmingLanguage = 'unknown' } = books[6];
//2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({ title: bookTitle, author: bookAuthor } = books[0]);
//2.5
const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
//2.6
const printBookInfo = function ({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}.`);
}; */
//TODO the spread operator ...
/* //3.1
const bookAuthors = [...books[0].author, ...books[1].author];
//3.2
function spellWord(str) {
  const result = [...str];
  console.log(result);
} */
//TODO rest patterns and parameters ...
/* //4.1
const [mainKeyword, ...rest] = books[0].keywords;
//4.2
const { publisher: bookPublisher, ...restOfTheBook } = books[1];
//4.3
function printBookAuthorsCount(title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
} */
//TODO short circuiting (&& and ||)
/* //5.1
function hasExamplesInJava(book) {
  return book.programmingLanguage === 'Java' || 'no data available';
}
//5.2
for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`${books[i].title} has online content.`);
} */
//TODO the nullish coalescing operator (??) 6.1
//only null and undefined are considered nullish values, while 0 and '' are considered valid values
/* for (let i = 0; i < books.length; i++) {
  console.log(
    books[i].onlineContent ??
      `${books[i].title} provides no data about online content.`,
  );
} */
//TODO logical assignments operators
/* //7.1
for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
}
//7.2
for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
} */
//HACK coding challenge #1 football betting app
/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
const { team1, x: draw, team2 } = game.odds;

function printGoals(...players) {
  console.log(...players);
  console.log(`${players.length} goals were scored.`);
}
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
 */
//TODO Looping arrays: the for-of loop
//8.1
/* let pageSum = 0;

for (const book of books) {
  pageSum += book.pages;
}
//8.2
const allAuthors = [];

for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
  } else {
    allAuthors.push(...book.author);
  }
}
//8.3
for (const [i, el] of allAuthors.entries()) {
  console.log(`${i + 1}. ${el}`);
} */
//TODO enhanced object literals
//9.1
/* const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
//9.2
const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
}; */
//TODO optional chaining (?.)
/* //10.1
function getFirstKeyword(book) {
  return book.keywords?.[0] ?? 'No keywords available';
} */
//TODO looping objects: object keys, values, and entries
//11.1
/* const entries = [];

for (const prop of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([prop]);
}
//11.2
for (const [index, value] of Object.values(
  books[0].thirdParty.goodreads,
).entries()) {
  entries[index].push(value);
}
//11.3
const entries2 = Object.entries(books[0].thirdParty.goodreads);
//11.4
console.log(entries);
console.log(entries2); */
//HACK coding challenge #2 football betting app
/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [index, value] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${value}`);
}

let sum = 0;
for (const odd of Object.values(game.odds)) {
  sum += odd;
}
const avg = sum / Object.values(game.odds).length;
console.log(avg);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
} */
//TODO sets
/* //12.1
const allKeywords = [];

for (const book of books) {
  allKeywords.push(...book.keywords);
}
//12.2
const uniqueKeywords = new Set(allKeywords);
//12.3
uniqueKeywords.add('coding');
uniqueKeywords.add('science');
uniqueKeywords.delete('business');

const uniqueKeywordsArr = [...uniqueKeywords];
uniqueKeywords.clear(); */
//TODO maps: fundamentals
//13.1-13.4
/* const bookMap = new Map();
bookMap.set('title', 'Clean Code').set('author', 'Robert C. Martin');
//const bookMap = new Map([['title', 'Clean Code'], ['author', 'Robert C. Martin']]);
bookMap.set('pages', 464);
const title = bookMap.get('title');
const author = bookMap.get('author');
console.log(`${title} by ${author}`);

if (bookMap.has('author')) {
  console.log(`The author of the book is known`);
} */
//TODO maps: iteration
/* //14.1-14.2
const firstBookMap = new Map(Object.entries(books[0]));

for (const [key, value] of firstBookMap) {
  if (typeof value === 'number') {
    console.log(`${key}: ${value}`);
  }
} */
//HACK coding challenge #3 football betting app
/* const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [67, '🔶 Yellow card'],
  [70, '🔁 Substitution'],
  [72, '⚽️ GOAL'],
  [80, '🔶 Yellow card'],
  [86, '🔁 Substitution'],
  [90, '⚽️ GOAL'],
]);

const events = [...new Set(gameEvents.values())];

gameEvents.delete(64);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`,
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}*/
//TODO working with strings - part 1
/* //15.1 - 15.4
const isbn = books[0].ISBN;
console.log(isbn[6], isbn[4], isbn[9], isbn[8]);
console.log(
  books[0].ISBN['6'],
  books[0].ISBN['4'],
  books[0].ISBN['9'],
  books[0].ISBN[8],
);
const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess'));
const index = quote.indexOf('boxing');
console.log(quote.slice(index, index + 6));

function isContributor(author) {
  return author.includes('Contributor');
  //return author.indexOf('Contributor') !== -1;
} */
//TODO working with strings - part 2, 16.1 - 16.3
/* function normalizeAuthorName(author) {
  author = author.trim();
  const firstName = author.slice(0, author.indexOf(' '));

  let lastName = '';
  if (author.indexOf(' ') === author.lastIndexOf(' ')) {
    lastName = author.slice(author.indexOf(' ') + 1, author.length);
  } else {
    lastName = author.slice(author.indexOf(' ') + 1, author.lastIndexOf(' '));
  }

  const capitalizedFirstName =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const capitalizedLastName =
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  return capitalizedFirstName + ' ' + capitalizedLastName;
}

const newBookTitle = books[1].title.replace('Programs', 'Software');

function logBookTheme(title) {
    const lowerTitle = title.toLowerCase();

    if (lowerTitle.startsWith('computer')) {
        console.log('This book is about computers.');
    } else if (lowerTitle.includes('algorithms') && lowerTitle.includes('structures')) {
        console.log('This book is about algorithms and data structures.');
    } else if ((lowerTitle.endsWith('system') || lowerTitle.endsWith('systems')) && !lowerTitle.includes('operating')) {
        console.log('This book is about some systems, but definitely not about operating systems.');
    }
} */
//TODO working with strings - part 3, 17.1 - 17.3
/* const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

function logBookCategories(categories) {
  const categoryList = categories.split(';');
  console.log(categoryList.join('\n'));
}
logBookCategories(bookCategories);

function getKeywordsAsString(books) {
  const allKeywords = [];

  for (const book of books) {
    allKeywords.push(...book.keywords);
  }

  //console.log(new Set(allKeywords));
  const uniqueKeywords = [...new Set(allKeywords)];
  //console.log(uniqueKeywords);
  return uniqueKeywords.join(';');
}
console.log(getKeywordsAsString(books));

const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];

function logBookChapters(chapters) {
  for (const [chapter, page] of chapters) {
    console.log(chapter.padEnd(20, '_') + ' ' + page);
  }
}

logBookChapters(bookChapters); */
//HACK coding challenge #4
/* document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');

button.addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for (const [index, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20, ' ')} ${'✅'.repeat(index + 1)}`);
  }
}); */
//
