"use strict";

//Solution 1

function parse(str) {
  let result = 0;
  const operations = {
    i: () => ++result,
    d: () => --result,
    s: () => (result = Math.pow(result, 2)),
    o: () => (result = [result]),
  };

  let commands;

  if (typeof str === "string") {
    commands = str.split("");
  } else {
    console.log("this parameter is not a string");
    return;
  }

  for (let i = 0; i < commands.length; i++) {
    if (!operations[commands[i]]) {
      console.log(`we have not such operation like "${commands[i]}"`);
      return;
    }

    if (commands[i] === "o") {
      return operations[commands[i]]();
    }

    operations[commands[i]]();
  }
  console.log("we didn't get command 'o'");
}

//Solution 2

function parse1(str) {
  let result = 0;
  let commands;

  if (typeof str === "string") {
    commands = str.split("");
  } else {
    console.log("this argument is not a string");
    return;
  }

  for (let j = 0; j < commands.length; j++) {
    switch (true) {
      case commands[j] === "i":
        ++result;
        break;
      case commands[j] === "d":
        --result;
        break;
      case commands[j] === "s":
        result = Math.pow(result, 2);
        break;
      case commands[j] === "o":
        result = [result];
        return result;
      default: {
        console.log(`we have not such operation like "${commands[j]}"`);
        return;
      }
    }
  }

  console.log("we didn't get command 'o'");
}

console.log(parse("iiisdoso"));
console.log(parse1("iiisdoso"));
