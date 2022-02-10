'use strict';

// function makeJuice(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `This is delicious juice containing ${apples} apples and ${oranges} orangees`;
//   return juice;
// }

// const newJuice = makeJuice(3, 5);
// console.log(newJuice);

// const calcAge = (birthyear) => 2022 - birthyear;
// const myAge = calcAge(1991);
// console.log(myAge, typeof myAge);

// const yearsToRetirement = (birthyear) => {
//   const age = calcAge(birthyear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return `${retirement} years til your retirement`;
//   } else {
//     return `its time to retire`;
//   }
// };

// console.log(yearsToRetirement(1945));

// function cutPieces(fruit) {
//   return fruit * 6;
// }

// function makeJuice(apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);
//   const juice = `This is delicious juice containing ${applePieces} pieces of apples and ${orangePieces} pieces of orangees`;
//   return juice;
// }

// const newJuice = makeJuice(3, 5);
// console.log(newJuice);

// Coding challenage #!

const calcAverage = (a, b, c) => (a + b + c) / 3;

const dAV = calcAverage(200, 50, 49);
const kAV = calcAverage(44, 23, 71);

const checkWinner = function (avgDolphins, avgKoalas) {
  console.log(avgDolphins, avgKoalas);
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${Math.round(
      avgDolphins
    )} vs. ${Math.round(avgKoalas)})`;
  } else if (
    Math.round(avgKoalas) >=
    2 * Math.round(avgDolphins)
  ) {
    return `Koalas win (${Math.round(
      avgKoalas
    )} vs. ${Math.round(avgDolphins)})`;
  } else {
    return `Winning team did not score enough`;
  }
};

// const winner = checkWinner(dAV, kAV);
// console.log(winner);

// const friends = ['Lika', 'Masha', 'Ira'];
// console.log(friends);

// friends[friends.length - 1] = 'Marina';
// console.log(friends);

// const schoolFriends = ['Gabriel', 'Jonathan', friends];
// console.log(schoolFriends);

// const years = [1990, 1967, 1985];

// const calcAge = (birthyear) => {
//   return 2022 - birthyear;
// };

// const age1 = calcAge(years[2]);
// console.log(age1);

// years.push(1888);
// console.log(years);

// const newLength = years.unshift(700);
// console.log(years, newLength);

// years.pop();
// const poped = years.pop();
// console.log(years, poped);

// const shifted = years.shift();
// console.log(years, shifted);

// console.log(years.indexOf(1967));
// console.log(years.includes(1967));

// //Coding Challange #2

// const bills = [124, 555, 44];
// const tips = [0.15, 0.2];
// const total = [];

// const tipCalc = (bill, tips) => {
//   let tip;

//   if (bill >= 50 && bill <= 300) {
//     tip = tips[0];
//   } else {
//     tip = tips[1];
//   }

//   const sum = bill + bill * tip;

//   total.push(sum);
//   return console.log(`The bill was $${bill}, the tip was $${tip}, and the total value
//   $${bill + tip}`);
// };

// const result = tipCalc(bills[0], tips);
// console.log(result);

// const person = {
//   firstName: 'Sasha',
//   lastName: 'Ivanova',
//   birthYear: 1993,
//   job: 'developer',
//   pets: ['cat', 'parrot', 'dog'],
//   hasDriversLicense: false,
//   calcAge: function () {
//     console.log(this);
//     return 2022 - this.birthYear;
//   },
//   getSummary: function () {
//     return `${
//       this.firstName
//     } is ${this.calcAge()} years old and ${
//       this.hasDriversLicense ? `has ` : ` does not have`
//     } drivers licence`;
//   },
// };

// console.log(person);

// person.location = 'Austin';
// console.log(person);
// console.log(
//   `I have ${person.pets.length} pets, and my favopurite is ${person.pets[0]}`
// );

// console.log(person.calcAge());

// console.log(person.getSummary());

// //Coding Challange #3

// const mark = {
//   name: 'Mark Miller',
//   weight: 200,
//   height: 1.7,
//   calcBMI: function () {
//     return (this.weight / this.height) ** 2;
//   },
// };

// const john = {
//   name: 'John Smith',
//   weight: 120,
//   height: 1.9,
//   calcBMI: function () {
//     return (this.weight / this.height) ** 2;
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(`Mark's
//     BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})!`);
// } else {
//   console.log(`John's
//     BMI (${john.calcBMI()}) is higher than Marks's (${mark.calcBMI()})!`);
// }

// for (let rep = 1; rep <= 16; rep++) {
//   console.log(`Lifting weigths repition ${rep} 🏋️‍♀️`);
// }

// const types = [];
// const superwoman = [
//   'Sasha',
//   'Ivanova',
//   1993,
//   'developer',
//   ['cat', 'parrot', 'dog'],
//   false,
// ];

// for (let i = 0; i < superwoman.length; i++) {
//   console.log(superwoman[i]);
//   types[i] = typeof superwoman[i];
// }

// console.log(types);

// const years = [1893, 1875, 1856, 1914];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2022 - years[i]);
// }
// console.log(ages);

// for (let i = years.length - 1; i >= 0; i--) {
//   ages.push(2022 - years[i]);
// }

// console.log(ages);

// for (let excerisce = 1; excerisce < 4; excerisce++) {
//   console.log(`------starting exrersice ${excerisce}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`rep  ${rep}`);
//   }
// }

// let rep = 0;
// while (rep <= 10) {
//   console.log(`Lifting weigths repition ${rep} 🏋️‍♀️`);
//   rep = rep + 2;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log(`loop is ending`);
//   }
// }

//Coding challange #4

const bills = [
  22, 295, 176, 440, 37, 105, 10, 1100, 86, 52,
];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300
    ? bill * 0.15
    : bill * 0.2;
};

for (let bill = 1; bill < bills.length; bill++) {
  tips.push(calcTip(bills[bill]));
  totals.push(bills[bill] + calcTip(bills[bill]));
}

console.log(tips);
console.log(totals);
