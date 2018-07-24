// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let maxcount = 0;
  let maxchar = '';
  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }
  //console.log(charMap);
  for (let char in charMap) {
    console.log(char);
    if (charMap[char] > maxcount) {
      maxcount = charMap[char];
      maxChar = char;
    }
  }
  //console.log(maxChar);
  return maxChar;
}

module.exports = maxChar;
