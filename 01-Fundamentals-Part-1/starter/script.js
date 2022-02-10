let continent = 'North America';
let country = 'US';
let population = 350000;

console.log(continent, country, population);

//Coding challange #1

let markWeight = 90;
let markHeight = 1.69;
let johnWeight = 120;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

//Coding challange #2

if (markBMI > johnBMI) {
  console.log(`Mark's
  BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's
  BMI (${johnBMI}) is higher than Marks's (${markBMI})!`);
}

// const firstName = localStorage.setItem(
//   'firstName',
//   'Liuba'
// );

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       console.log('Get location', position);
//     },
//     () => {
//       console.log('nope');
//     }
//   );
// }

// const answer = prompt('Do you like cats or dogs?');
// console.log(answer);

// if (answer === 'cat' || answer === 'cats') {
//   console.log('😺');
//   alert('😺');
// } else {
//   console.log('🐶');
//   alert('🐶');
// }

//Coding challange #3

const dScore1 = 96;
const dScore2 = 108;
const dScore3 = 89;

const kScore1 = 88;
const kScore2 = 91;
const kScore3 = 110;

const dolphinsAV = (dScore1 + dScore2 + dScore3) / 3;
const koalasAV = (kScore1 + kScore2 + kScore3) / 3;
console.log(dolphinsAV, koalasAV);

if (dolphinsAV > koalasAV && dolphinsAV >= 100) {
  console.log(`Dolphins won`);
} else if (dolphinsAV < koalasAV && koalasAV >= 100) {
  console.log(`Koalas won`);
} else if (
  dolphinsAV === koalasAV &&
  koalasAV >= 100 &&
  dolphinsAV >= 100
) {
  console.log('It is a draw');
} else {
  console.log('did not score enough');
}

//Coding challange #4

const bill = 40;
let tip;

bill <= 50 && bill >= 300
  ? (tip = bill * 0.15)
  : (tip = bill * 0.2);
console.log(`The bill was $${bill}, the tip was $${tip}, and the total value
$${bill + tip}`);
