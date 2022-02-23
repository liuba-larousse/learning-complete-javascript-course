// Challange #1

// Write a function that takes a Set and an array as arguments
// If not already existing, add each element in the array to the Set
// Return the modified Set
function myFunction1(set, arr) {
  arr.forEach((el) => {
    !set.has(el) && set.add(el);
  });
  return set;
}

//other solution
// function myFunction(set, arr) {
//     arr.forEach((e) => set.add(e));
//     return set;
//   }

console.log(myFunction1(new Set([1, 2, 3]), [4, 5, 6]));
// Expected new Set([1, 2, 3, 4, 5, 6 ])

console.log(myFunction1(new Set('12345'), [...'6789']));
// Expected new Set([...'123456789'])

console.log(myFunction1(new Set([1, 2, 3]), [2, 3]));
//  Expected new Set([1, 2, 3])

// // *
// // *
// // *

//Challenge #2

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function myFunction2(str) {
  console.log(str.length);
  newStr = str.slice(str.length - 3, str.length);
  return newStr;
}

// authors solution
// function myFunction(str) {
//     return str.slice(-3);
//  }

console.log(myFunction2('abcdefg'));
// Expected 'efg'

console.log(myFunction2('1234'));
// Expected '234'

console.log(myFunction2('fgedcba'));
// Expected'cba'

// *
// *
// *

// Challange #3

// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function myFunction3(a, n) {
  return a[n - 1];
}

console.log(myFunction3('abcd', 1));
// Expected ('a');
console.log(myFunction3('zyxbwpl', 5));
// Expected ('w');
console.log(myFunction3('gfedcba', 3));
// Expected ('e');

// *
// *
// *

// Chellange #4

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
function myFunction4(obj) {
  return obj['country'];
  //   return obj.country
}
console.log(
  myFunction4({ continent: 'Asia', country: 'Japan' })
);
// Expected 'Japan'
console.log(
  myFunction4({ country: 'Sweden', continent: 'Europe' })
);
// Expected 'Sweden'

// *
// *
// *

// Challenge #5

// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise
function myFunction5(a, b) {
  if (Object.keys(a).includes(b)) {
    return true;
  }
  return false;
}

console.log(myFunction5({ a: 1, b: 2, c: 3 }, 'b'));
// Expected
// true
console.log(myFunction5({ x: 'a', y: 'b', z: 'c' }, 'a'));
// Expected
// false
console.log(myFunction5({ x: 'a', y: 'b', z: 'c' }, 'z'));
// Expected
// true
