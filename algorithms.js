// Recursive Fibonacci
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

// String Reversal (If .reverse() isn't usable)
function reverseStr(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

// Another Solution (we gettin' fancy)
function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

// Palindrome
function palindrome(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}

// Integer Reversal
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n);
}

// Max Characters (Most common character)
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// Fizzbuzz
function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

// Array Chunk
// chunk([1, 2, 3, 4, 5], 2) --> [[1, 2], [3, 4], [5]]
function chunk(arr, size) {
  const chunked = [];

  for (let element of arr) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
}

// Anagrams
// anagrams('rail safety', 'fairy tales'), (1 R, 2 A's, etc.) --> returns true
function anagrams(strA, strB) {
  return cleanString(strA) === cleanString(strB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

// Capitalize Sentence
function capitalize(str) {
  const words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}

// Printing Steps
// steps(4) -->
// '#   '
// '##  '
// '### '
// '####'
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";

    for (let column = 0; column <= n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }

    console.log(stair);
  }
}

//Printing Steps (Recursive Solution)
function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
}

//Pyramids
//pyramid(3)
// '  #  '
// ' ### '
// '#####'

function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

//Recursive Solution
function pyramid(n, row = 0, level = "") {
  if (row === n) {
    return;
  }
  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, level + add);
}

//Find Vowels in String
function vowels(str) {
  let count = 0;
  const checker = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }
  return count;
}

//Find Vowels (Second solution)
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

//Matrix Spiral
// matrix(4)
// [[1, 2, 3, 4],
// [12, 13, 14, 5],
// [11, 16, 15, 6],
// [10, 9, 8, 7]
// ]
function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    //Top Row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    //Right Column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    //Bottom Row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    //Start Column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return results;
}

//Fibonacci (Iterative Soution)
function fib(n) {
  const result = [1, 2];

  for (let i = 2; i < n; i++) {
    const a = result[n - 1];
    const b = result[n - 2];

    results.push(a + b);
  }

  return result[n];
}

//Memoization of Fibonacci
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

//Queues
//create -> const q = new Queue()
//Add -> q.add(1)
//Remove - > q.remove()

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}
