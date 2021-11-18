"use strict";

const accum = (str) => {
  if (!str.match(/^[A-Za-z]+$/))
    return "Please include only a-z and A-z characters";
  let result = "";
  let hyphen = "-";
  for (let i = 0; i < str.length; i++) {
    if (i === str.length - 1) hyphen = "";
    result += str[i].toUpperCase() + str[i].toLowerCase().repeat(i) + hyphen;
  }
  return result;
};

console.log(accum("abcd"));
console.log(accum("cwAt"));
