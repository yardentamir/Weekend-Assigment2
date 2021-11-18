"use strict";

console.log("--- no reduce ---");
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

console.log("--- with reduce ---");

const duplicateCount2 = (text) => {
  const textArr = text.toLowerCase().split("");
  let count = 0;
  let result = textArr.reduce((obj, char) => {
    !obj[char] ? (obj[char] = 1) : obj[char]++;
    return obj;
  }, {});

  for (let i in result) {
    if (result[i] > 1) count++;
  }
  return count;
};

console.log(duplicateCount2("abcde"));
console.log(duplicateCount2("aA11"));
console.log(duplicateCount2("ABBA"));
