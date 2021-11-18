"use strict";

const duplicateCount = (text) => {
  const newText = text.toLowerCase();
  let count = 0;
  const obj = {};
  for (let i of newText) {
    !obj[i] ? (obj[i] = 1) : obj[i]++;
  }

  for (let i in obj) {
    if (obj[i] > 1) count++;
  }
  return count;
};

console.log(duplicateCount("abcde"));
console.log(duplicateCount("aA11"));
console.log(duplicateCount("ABBA"));
