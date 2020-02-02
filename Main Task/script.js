// First version

let arr = [];

let sentence = prompt('Enter sentence', '');
let sentence1 = prompt('Enter next sentence', '');
let sentence2 = prompt('Enter last sentece', '');

arr.push(sentence, sentence1, sentence2);

let arr1 = [12, 24, 87, 'some text'];

let unitedArr = arr.concat(arr1);

let result = unitedArr.join('');
let quantityOfChars = result.length;

console.log(quantityOfChars);

// Second version

function fillingArr() {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(prompt('Enter sentence', ''))
    }

    return arr;
}

function determQuanOfChars(arr, arr1) { 
    return arr.concat(arr1).join('').length;
}

let firstArr = fillingArr();
let secondArr = [12, 24, 87, 'some text'];

console.log(determQuanOfChars(firstArr, secondArr));