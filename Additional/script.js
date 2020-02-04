let arr =  [NaN, 0, 15, false, -22, '',undefined, 47, null];

for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
        arr.splice(i, 1);
        i--;
    }
}

console.log(arr);