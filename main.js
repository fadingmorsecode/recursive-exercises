// Uncomment console.logs to test answers

// Question 1: Sum all numbers

function sumRange(num) {
  if (num === 1) {
    return 1;
  } else {
    return num + sumRange(num - 1);
  }
}

// console.log(sumRange(3));

// Question 2: Power function

function power(b, x) {
  if (x === 0) {
    return 1;
  } else {
    return b * power(b, x - 1);
  }
}

// console.log(power(2, 4));
// console.log(power(2, 3));
// console.log(power(2, 2));
// console.log(power(2, 1));
// console.log(power(2, 0));

// Question 3: Calculate factorial

function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// console.log(factorial(5));

// Question 4: Check all values in an array

var allAreLessThanSeven = all([1, 2, 5, 9], function (num) {
  return num < 7;
});

// console.log(allAreLessThanSeven); // false

function all(array, callback) {
  let copy = Array.from(array);

  if (copy.length === 0) {
    return true;
  }

  let firstElement = copy.shift();

  if (callback(firstElement)) {
    return all(copy, callback);
  } else {
    return false;
  }
}

// Question 5: Product of an array

function productOfArray(array) {
  if (array.length === 0) {
    return 1;
  } else {
    return array.shift() * productOfArray(array);
  }
}

var six = productOfArray([1, 2, 3]); // 6
var sixty = productOfArray([1, 2, 3, 10]); // 60

// console.log(six);
// console.log(sixty);

// Question 6: Search JS object

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

function contains(object, value) {
  for (let prop in object) {
    if (typeof object[prop] === 'object') {
      return contains(object[prop], value);
    } else {
      if (object[prop] === value) {
        return true;
      }
    }
  }
  return false;
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, 'foo'); // false
// console.log(hasIt);
// console.log(doesntHaveIt);

// Question 7: Parse a multi-dimensional array

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

function totalIntegers(array) {
  let totalInt = 0;
  if (array.length === 0) {
    return 0;
  } else {
    array.forEach((item) => {
      if (Array.isArray(item)) {
        return (totalInt += totalIntegers(item));
      } else {
        if (typeof item === 'number') {
          return (totalInt += 1);
        }
      }
    });
  }
  return totalInt;
}

// console.log(seven);

// Question 8: Write a function that sums squares of numbers in list that may contain more lists

var l = [1, 2, 3];
var l2 = [[1, 2], 3];
var l3 = [[[[[[[[[1]]]]]]]]];
var l4 = [10, [[10], 10], [10]];

function SumSquares(array) {
  let sum = 0;
  array.forEach((item) => {
    if (Array.isArray(item)) {
      return (sum += SumSquares(item));
    } else {
      return (sum += item * item);
    }
  });
  return sum;
}

// console.log(SumSquares(l));
// console.log(SumSquares(l2));
// console.log(SumSquares(l3));
// console.log(SumSquares(l4));

// Question 9: The function should return an array containing repetitions of the number argument.

function replicate(repetitions, num, result = []) {
  if (repetitions < 0) {
    return result;
  } else if (repetitions === 1) {
    result.push(num);
    return result;
  } else {
    result.push(num);
    return replicate(repetitions - 1, num, result);
  }
}

// console.log(replicate(3, 5)); // [5, 5, 5]
// console.log(replicate(1, 69)); // [69]
// console.log(replicate(-2, 6)); // []
