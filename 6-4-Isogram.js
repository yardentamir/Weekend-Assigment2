"use strict";

console.log("--- no reduce ---");

const isIsogramFunc = (str) => {
  const newText = str.toLowerCase();
  let isIsogram = true;
  const obj = {};
  for (let i of newText) {
    !obj[i] ? (obj[i] = 1) : obj[i]++;
  }
  for (let i in obj) {
    if (obj[i] > 1) {
      isIsogram = false;
      break;
    }
  }
  return isIsogram;
};

console.log(isIsogramFunc("Dermatoglyphics"));
console.log(isIsogramFunc("aba"));
console.log(isIsogramFunc("moOse"));

console.log("--- with reduce ---");

const isIsogramFunc2 = (text) => {
  const textArr = text.toLowerCase().split("");
  let isIsogram = true;
  let result = textArr.reduce((obj, char) => {
    !obj[char] ? (obj[char] = 1) : obj[char]++;
    return obj;
  }, {});

  for (let i in result) {
    if (result[i] > 1) {
      isIsogram = false;
      break;
    }
  }
  return isIsogram;
};

console.log(isIsogramFunc2("Dermatoglyphics"));
console.log(isIsogramFunc2("aba"));
console.log(isIsogramFunc2("moOse"));
