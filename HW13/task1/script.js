"use strict";

// solution 1 : according to conditions of task

let sum = (function() {
  let result = 0;
  return function(x) {
    result += x;
    return result;
  };
})();

console.log(sum(3));
console.log(sum(5));
console.log(sum(228));

//solution 2 : reusable solution

function add() {
  let result = 0;

  return function(x) {
    return (result += x);
  };
}

let sum1 = add();

console.log(sum1(3));
console.log(sum1(5));
console.log(sum1(228));
