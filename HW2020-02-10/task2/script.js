let str =  'hello MY name is JavaScript and I like your code styLe';
let result = str;

function checkLowerCase(str, i) {
    return str.charAt(i) === str.charAt(i).toLowerCase();
}

function changeCase(str, i) {
    let isLowerCase = checkLowerCase(str, i);
    let charToLowerCase = str.slice(0, i) + str.charAt(i).toLowerCase() + str.slice(i+1);
    let charToUpperCase = str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i+1);
    return isLowerCase ? charToUpperCase : charToLowerCase;
}

for (let i = 0; i < str.length; i++) {
    result = changeCase(result, i); 
}

console.log(result);