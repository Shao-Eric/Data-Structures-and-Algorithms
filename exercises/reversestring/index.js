// node inspect index.js
// cont or c => repl => paste in the code => ctrl c to exit

// #1 solution
// function reverse(str) {
//   const arr = str.split('');
//   let newstr = '';
//   for (let i = str.length - 1; 0 <= i; i--) {
//     newstr = newstr + arr[i];
//   }
//   return newstr;
// }

// # second solution
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// #3 solution
function reverse(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

// function reverse(str) {
//   debugger;
//   return str
//     .split('')
//     .reduce((reversed, character) => character + reversed, '');
//   // second arg is the initial value
// }

module.exports = reverse;
