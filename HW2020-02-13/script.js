let arr1 = [25, 'string-string', 13, null, 100, [12, 45, 13, 'skdl', 990], 'next', 'new'];
let arr2 = ['next', 'string-string', 25, 'new', 13,  89, 100, null];

function compareArr(arr1, arr2) {
    let result = [];
    
    arr1.forEach(item1 => arr2.forEach(item2 => {
        let isEqualValues = item1 === item2;
        let isNumberModFive = isEqualValues && typeof item1 === 'number' && item1 % 5 === 0;
        let isStringLenghtMoreFive = isEqualValues && typeof item1 === 'string' && item1.length > 5;
        
        switch(true) {
            case isNumberModFive: 
                result.push('FIVE');
                break;
            case isStringLenghtMoreFive:
                result.push('FSTR');
                break;
            case isEqualValues:
                result.push(item1);
                break;
        }   
    }))

    return result;
}

console.log(compareArr(arr1, arr2));