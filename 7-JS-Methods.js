"use strict";

// js methods

const jsMethods = (arr) => {
  const filterH = arr
    .filter((word) => word[0] === "h")
    .map((word) => word + "?");

  const newArrForEach = [];
  arr.forEach((word) => {
    if (word[0] === "h") newArrForEach.push(word + "?");
  });

  const mapH = arr.map((word) => {
    if (word[0] === "h") return word + "?";
    return word + "!";
  });

  console.log(filterH);
  console.log(newArrForEach);
  console.log(mapH);
};

jsMethods(["hello", "world", "how", "are", "you"]);

// no js methods

const noJsMethods = (arr) => {
  const result1 = [];
  const result2 = [];

  for (let word of arr) {
    if (word[0] === "h") {
      result1.push(word + "?");
      result2.push(word + "?");
    } else {
      result2.push(word + "!");
    }
  }
  console.log(result1);
  console.log(result2);
};

noJsMethods(["hello", "world", "how", "are", "you"]);
