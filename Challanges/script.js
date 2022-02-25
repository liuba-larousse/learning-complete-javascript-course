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

// *
// *
// *

// Challenge #6

// Write a function that takes an array (a) and a number (b) as arguments
// Sum up all array elements with a value greater than b
// Return the sum
function myFunction6(a, b) {
  const sum = a
    .filter((num) => num > b)
    .reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue
    );
  return sum;
}

console.log(myFunction6([1, 2, 3, 4, 5, 6, 7], 2));
// Expected
// 25

console.log(myFunction6([-10, -11, -3, 1, -4], -3));
// Expected
// 1

console.log(myFunction6([78, 99, 100, 101, 401], 99));
// Expected
// 602

// Challenge #7

// Write a function that takes a value as argument
// Return the type of the value
function myFunction7(a) {
  return typeof a;
}

console.log(myFunction7(1));
// Expected
// 'number'

console.log(myFunction7(false));
// Expected
// 'boolean'

console.log(myFunction7({}));
// Expected
// 'object'
myFunction7(null);
console.log(myFunction7(null));
// Expected
// 'object'

console.log(myFunction7('string'));
// Expected
// 'string'

console.log(myFunction7(['array']));
// Expected
// 'object'

// *
// *
// *

// Challenge #8

// Write a function that a string (a) as argument
// Create an object that has a property with key 'key' and a value of a
// Return the object
function myFunction8(a) {
  const o = new Object();
  o.key = a;
  return o;
}

console.log(myFunction8('a'));
// Expected
// {key:'a'}

console.log(myFunction8('z'));
// Expected
// {key:'z'}

console.log(myFunction8('b'));
// Expected
// {key:'b'}

// *
// *
// *

//Challenge #9

// Write a function that takes an array (a) as argument
// Return the number of elements in a
function myFunction9(a) {
  return a.length;
}

console.log(myFunction9([1, 2, 2, 4]));
// Expected
// 4

console.log(myFunction9([9, 9, 9]));
// Expected
// 3

console.log(myFunction9([4, 3, 2, 1, 0]));
// Expected
// 5

// *
// *
// *

//Challange #10

// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
function myFunction10(a, b) {
  return a + b;
}

console.log(myFunction10(1, 2));
// Expected
// 3

console.log(myFunction10(1, 10));
// Expected
// 11

console.log(myFunction10(99, 1));
// Expected
// 100

// *
// *
// *

//Challenge #11

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
function myFunction11(a, b, c, d, e, f) {
  return;
}

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
function myFunction11(a, b, c, d, e, f) {
  return (((a + b - c) * d) / e) ** f;
}

console.log(myFunction11(6, 5, 4, 3, 2, 1));
// Expected
// 10.5

console.log(myFunction11(6, 2, 1, 4, 2, 3));
// Expected
// 2744

console.log(myFunction11(2, 3, 6, 4, 2, 3));
// Expected
// -8

// *
// *
// *

//Challenge #12

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function myFunction12(a) {
  return a.slice(0, a.length / 2);
}

console.log(myFunction12('abcdefgh'));
// Expected
// 'abcd'
console.log(myFunction12('1234'));
// Expected
// '12'
console.log(myFunction12('gedcba'));
// Expected
// 'ged'

//Challenge # 13

// *
// *
// *

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
function myFunction13(obj, key) {
  return obj[key];
}

console.log(
  myFunction13(
    { continent: 'Asia', country: 'Japan' },
    'continent'
  )
);
// Expected
// 'Asia'
console.log(
  myFunction13(
    { country: 'Sweden', continent: 'Europe' },
    'country'
  )
);

// Expected
// 'Sweden'

// *
// *
// *

// Challange #14
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
function myFunction14(a, b) {
  if (a === b) {
    return true;
  }
  return false;
  // return a===b
}

console.log(myFunction14(2, 3));
// Expected
// false
console.log(myFunction14(3, 3));

// Expected
// true
console.log(myFunction14(1, '1'));

// Expected
// false
console.log(myFunction14('10', '10'));

// Expected
// true

// *
// *
// *

// Challange #15

// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
function myFunction15(a) {
  return a.slice(0, 3);
}

console.log(myFunction15('abcdefg'));
// Expected;
// ('abc');

console.log(myFunction15('1234'));
// Expected;
// ('123');

console.log(myFunction15('fgedcba'));
// Expected;
// ('fge');

// *
// *
// *

// Challange #16

// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
function myFunction16(a) {
  return a.splice(0, 3);
}

console.log(myFunction16([1, 2, 3, 4]));
// Expected
// [1,2,3]

console.log(myFunction16([5, 4, 3, 2, 1, 0]));
// Expected
// [5,4,3]
console.log(myFunction16([99, 1, 1]));

// Expected
// [99,1,1]

// *
// *
// *

// Challange #17

// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
function myFunction17(a, n) {
  return a[n - 1];
}

console.log(myFunction17([1, 2, 3, 4, 5], 3));
// Expected
// 3

console.log(myFunction17([10, 9, 8, 7, 6], 5));
// Expected
// 6

console.log(myFunction17([7, 2, 1, 6, 3], 1));
// Expected
// 7

//Challenge #18
// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array
function myFunction18(a) {
  const positive = [];
  a.forEach((el, i) => {
    el < 0 && positive.push(el);
  });
  return positive.length;
  // return a.filter((el) => el < 0).length;
}

console.log(myFunction18([1, -2, 2, -4]));
// Expected
// 2

console.log(myFunction18([0, 9, 1]));
// Expected
// 0

console.log(myFunction18([4, -3, 2, 1, 0]));
// Expected
// 1

// *
// *
// *

// Challange #18

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function myFunction(a) {
  return a.substr(0, a.length - 3);
}

console.log(myFunction('abcdefg'));
// Expected
// 'abcd'

console.log(myFunction('1234'));
// Expected
// '1'

console.log(myFunction('fgedcba'));

// Expected
// 'fged'
