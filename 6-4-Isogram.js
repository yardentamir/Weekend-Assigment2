"use strict";

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
