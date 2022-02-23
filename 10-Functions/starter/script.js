'use strict';

//DEFAULT PARAMETERS

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');

// PASSING ARGUMENTS VALUE VS REF

// for Value -> change in the copy changes only copy
// for Ref -> change in the copy changes original

// const flight = 'MP888';

// const liuba = {
//   name: 'Liuba Larousse',
//   passport: 848737,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'MP111';
//   passenger.name = 'Ms.' + passenger.name;

//   if (passenger.passport === 848737) {
//     alert('Checked In');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, liuba);
// console.log(liuba);
// console.log(flight);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(liuba);
// checkIn(flight, liuba);

//FIRST CLLASS FUNCTION VS HIGHER FUNCTION
// Functions are values

//Higher function reciebes another function as an argument

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best', upperFirstWord);

// transformer('JavaScript is the best', oneWord);

// const danceMove = function (direction) {
//   return `Move to the ${direction}`;
// };

// const createDance = function (direction, move) {
//   console.log(danceMove('right'));
// };

// createDance('right', danceMove);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterPrivet = greet('Privet');
// greeterPrivet('Alex');

// greet('Hi')('Ira');

// const american = {
//   airline: 'American',
//   iataCode: 'AA',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// american.book(239, 'Liuba Larousee');
// american.book(678, 'Kery Jackson');
// console.log(american);

// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = american.book;

// //call method

// book.call(eurowings, 23, 'Laura Awyan');
// console.log(eurowings);

// //apply mathod

// const flightData = [111, 'Nana Mbele'];
// book.apply(eurowings, flightData);
// console.log(eurowings);

// //spread
// book.call(eurowings, ...flightData);

// // bind method

// const bookEW = book.bind(eurowings);
// bookEW(23, 'Carmelo Nelson');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Lola Namelu');
// bookEW23('Marina Serano');

// // With event listeners

// american.planes = 300;
// american.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', american.buyPlane.bind(american));
// //this keyword is attached to the DOM element

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 300));

// const addVAT = addTax.bind(null, 0.23);
// //first argument is this keyword
// console.log(addVAT(400));

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(this.answers);

//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(',')}`);
//     }
//   },
// };

// poll.registerNewAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
