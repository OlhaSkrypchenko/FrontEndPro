let str = 'TODO LIST: 1 - buy apples, 2 - pay the bill, 3 - phone to mom, 142 - to do hometask';
let result = str;

for(let i = 0; i < str.length; i++) {
    switch(str.charAt(i)) {
        case '1': 
            result = result.replace('1', 'one');
            break;
        case '2':
            result = result.replace('2', 'two');
            break;
        case '3': 
            result = result.replace('3', 'three');
            break;
    }
}

console.log(result);