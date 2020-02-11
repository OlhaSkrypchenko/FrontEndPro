let arr = [34, 'hello', {}, null, true, undefined, function(){}, Symbol()];

for (let i = 0; i < arr.length; i++) {
   let result = arr[i] !== null ? typeof arr[i] : 'null';
   console.log(result);
}