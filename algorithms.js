// Recursive Fibonacci
function fib(n) {
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

// String Reversal (If .reverse() isn't usable)
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '')
}

// Palindrome
function palindrome(str) {
  const reversed = str.split('').reverse().join(' ')

  return str === reversed
}

// Integer Reversal
function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join(' ')

  return parseInt(reversed) * Math.sign(n)
}

// Max Characters (Most common character)
function maxChar(str) {
  const charMap = {}
  let max = 0
  let maxChar = ''

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }
  return maxChar
}

// Fizzbuzz
function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz')
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}

// Array Chunk
// chunk([1, 2, 3, 4, 5], 2) --> [[1, 2], [3, 4], [5]]
function chunk(arr, size) {
  const chunked = []

  for (let element of arr) {
    const last = chunked[chunked.length - 1]

    if (!last || last.length === size) {
      chunked.push([element])
    } else {
      last.push(element)
    }
  }
  return chunked
}

// Anagrams
// anagrams('rail safety', 'fairy tales') (1 R, 2 A's, etc.) --> returns true
function anagrams(strA, strB) {
  return cleanString(strA) === cleanString(strB)
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase()
    .split('')
    .sort()
    .join('')
}

// Capitalize Sentence
function capitalize(str) {
  const words = []

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1))
  }

  return words.join(' ')
}

// Printing Steps
// steps(4) -->
// '#   '
// '##  '
// '### '
// '####'
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = ''

    for (let column = 0; column <= n; column++) {
      if (column <= row) {
        stair += '#'
      } else {
        stair += ' '
      }
    }

    console.log(stair)
  }
}

//Printing Steps (Recursive Solution)
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return
  }

  if (n === stair.length){
    console.log(stair)
    return steps(n, row + 1)
  }

  if (stair.length <= row) {
    stair += '#'
  } else {
    stair += ' '
  }
  steps(n, row, stair)
}