"use strict";

const stringsOrganize = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

console.log(stringsOrganize("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(stringsOrganize("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
