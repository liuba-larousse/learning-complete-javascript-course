// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({ time = '20:00', adress }) {
//     console.log(time, adress);
//     console.log(`Order will be delivered at ${time} to ${adress}`);
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
//   },
// };

// restaurant.orderDelivery({ time: '22.30', adress: '22 Wicker Ln' });
// restaurant.orderDelivery({ adress: '22 Wicker Ln' });

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// // let temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
//   doesNotExist: menu = [],
// } = restaurant;

// console.log(restaurantName, hours, tags, menu);

// const {
//   fri: { open, close },
// } = restaurant.openingHours;
// console.log(open, close);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];

// const jointMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(jointMenu);

// const str = 'Liuba';
// const letters = [...str];
// console.log(letters);

// // const ingridients = [
// //   prompt('First ingridient? '),
// //   prompt('Second Ingridient?'),
// //   prompt('Third ingridient? '),
// // ];

// // restaurant.orderPasta(...ingridients);

// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(others);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function (...numbers) {
//   console.log(numbers);
// };

// add(2, 3);
// add(4, 5);
// add(7, 8, 9);

// // OR operator shot-circuits to the first truthy value
// // AND operator short-circuits to last thruthy value ONLY if all values are truthy

// restaurant.numGuests;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log(0 && 'Liuba');
// console.log(10 && 'Liuba' && undefined);

// console.log('Hello ' && 23 && null && 'liuba');

// if (restaurant.orderPasta) {
//   restaurant.orderPasta('spinach', 'cheese');
// }

// //same
// restaurant.orderPasta && restaurant.orderPasta('spinach', 'cheese', 'lamp');

// // NULISH values : null or undefined
// restaurant.numGuests = 0;
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Pizza',
//   owner: 'Lorenzo Chivi',
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests ?? 10;
// rest2.numGuests = rest2.numGuests ?? 10;

// rest2.owner = rest2.owner ||  '<ANONYMMOUS>';
// console.log(rest1);
// console.log(rest2);

// Coding Challange #1

const game = {
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

players1 = [...game.players[0]];
players2 = [...game.players[1]];
console.log(players1);
console.log(players2);

[gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

allPlayers = [...players1, ...players2];
console.log(allPlayers);

players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

({
  odds: { team1, x: draw, team2 },
  score,
} = game);
console.log(team1, draw, team2);

function printGoals(score, ...names) {
  let total;
  console.log(...names);
  console.log(score);
  strScore = [...score];
  console.log(strScore);
  total = Number(strScore[0]) + Number(strScore[2]);
  console.log(total);
  return total;
}

printGoals(score, players1Final);

team1 < team2 && console.log(`Team 1 wins`);
console.log(team1 < team2);

// Coding Challange #2

for (const item of game.scored.entries()) {
  console.log(`Goal ${item[0] + 1}: ${item[1]}`);
}

const gameOdds = Object.values(game.odds);
console.log(gameOdds);

let avarage = 0;
for (const odd of gameOdds) avarage = avarage + odd;
console.log(avarage);
avarage = avarage / gameOdds.length;
console.log(avarage);

const gameEntries = Object.entries(game.odds);
for (const odd of gameEntries) {
  console.log(
    `odd of${game[odd[0]] ? ` victory` : ` draw`} of ${game[odd[0]] || ''} : ${
      odd[1]
    }`
  );
  console.log(odd);
}

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
console.log(openingHours);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ time = '20:00', adress }) {
    console.log(time, adress);
    console.log(`Order will be delivered at ${time} to ${adress}`);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
};

console.log(restaurant.openingHours?.thur);
console.log(restaurant.openingHours?.mon);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}

const users = [{ name: 'liuba', email: 'liuba@gmail.com' }];

console.log(users[0]?.name ?? `User does not exist`);

const properties = Object.keys(openingHours);
console.log(properties);

for (const day of properties) {
  console.log(day);
}

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  console.log(day);
}

console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Bread'));
console.log(ordersSet.has('Pasta'));
console.log(ordersSet.delete('Pasta'));
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

const staff = ['Waiter', 'Manager', 'Chef', 'Waiter', 'Manager', 'Chef'];
const staffUnique = [new Set(staff)];
console.log(staffUnique);

console.log(new Set('kapitulskaya').size);

const rest = new Map();
rest.set('name', 'Amazing');
rest.set(1, 'boston');
rest.set(2, 'austin');
rest.set('categories', ['italian', 'pizzeria', 'organic']);
console.log(rest);

rest.set('open', 11).set('closed', 23);
console.log(rest);
const time = 21;
console.log(rest.get('closed'));
console.log(time > rest.get('open') && time < rest.get('closed'));

console.log(rest.has('catergories'));
console.log(rest.size);
// rest.clear()

const question = new Map([
  ['question', 'The best porgramming language?'],
  [1, 'C'],
  [2, 'JS'],
  [3, 'Java'],
  ['correct', 2],
  [true, 'Correct '],
  [false, 'Try again'],
]);
console.log(question);
console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// Coding Challange 3

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const averageTime = 90 / gameEvents.size;

console.log(`"An event happened, on average, every ${averageTime} minutes`);

for (const [key, value] of gameEvents) {
  console.log(`[${key < 45 ? `FIRST` : `SECOND`} HALF] ${key}: ${value}`);
}

// STRINGS

const checkMiddleSeat = function (seat) {
  // B and E are middle
  const s = seat.slice(-1);
  console.log(s);
  s === 'B' || s === 'E'
    ? console.log(`middle seat`)
    : console.log(`lucky seat`);
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

const passenger = 'lIUba';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = 'liuba@gmail.com';
const loginEmail = 'Liuba@gmail.com \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim;

const priceGB = '288,97$';
const priceUS = priceGB.replace(',', '.');
console.log(priceUS);

const announcement = `All passengers come to boarding door 23. Door 23`;
console.log(announcement.replace('door', 'gate'));

console.log('a+very+nice+string'.split('+'));
console.log('Liubov Kapitulskaya'.split(' '));

const [firstName, lastName] = 'Liubov Kapitulskaya'.split(' ');
const newName = ['Mrs.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeNames = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeNames('jessica anna maria gonzalez');

// Coding Challange #4
