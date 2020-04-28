"use stirct";

function sortArray(arr) {
  if (!Array.isArray(arr)) {
    console.log("this parameter is not an array");
    return;
  }

  let sortedOdds = arr.filter((num) => num % 2 !== 0).sort((a, b) => a - b);

  return arr.map((num) => {
    if (num % 2 !== 0) {
      num = sortedOdds.splice(0, 1)[0];
    }

    return num;
  });
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
