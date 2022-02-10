'use strict';

// function calcAge(birthYear) {
//   const age = 2022 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     const output = ` ${firstName} ${age}, born in ${birthYear}`;
//     console.log(output);
//   }

//   if (birthYear >= 1981 && birthYear <= 1996) {
//     const str = `Oh, and you are millenial , ${firstName}`;
//     console.log(str);

//     function add(a, b) {
//       return a + b;
//     }
//     console.log(add(2, 3));
//   }

//   printAge();
//   return age;
// }

// const firstName = 'liuba';
// calcAge(1991);

// function calcAge(birthYear) {
//   console.log(2022 - birthYear);
//   console.log(this);
// }
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1991);

// const liuba = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//   },
// };
// liuba.calcAge();

// const masha = {
//   year: 1993,
// };

// masha.calcAge = liuba.calcAge;
// masha.calcAge();

// const liuba = {
//   firstName: 'Liuba',
//   year: 1991,
//   calcAge: function () {
//     console.log(2022 - this.year);

//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => console.log(`Hey  ${this.firstName}`), // this is a window object
// };

// liuba.greet();
// liuba.calcAge();

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Folula';
console.log(lastName, oldLastName);

const liuba = {
  fistName: 'Liuba',
  lastName: 'Kapi',
  age: '27',
};

const marriedLiuba = liuba;
marriedLiuba.lastName = 'Abbas';

console.log(liuba, marriedLiuba);

const liubaCopy = Object.assign({}, liuba);
liubaCopy.lastName = 'Ahmed';
console.log(liuba, liubaCopy);
