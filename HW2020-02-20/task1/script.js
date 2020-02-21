function swapCommonObjEntries(obj1, obj2) {
    let result = {};
    for (let key in obj1) {
        if (obj1[key] === obj2[key]) {
            result[obj1[key]] = key;
        }
    }
    return result;
}

let employee1 = {
    name: 'Ivan',
    gender: 'male',
    age: 28,
    salary: 3000
    
}

let employee2 = {
    name: 'Ivan',
    gender: 'male',
    age: 45,
    salary: 4000,
}

console.log(swapCommonObjEntries(employee1, employee2));
