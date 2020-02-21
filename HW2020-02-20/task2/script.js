function createObjFromStr(message) {
    return message.split(' ') 
                  .reduce(
                      (obj, item, index, arr) => {
                         if (index % 2 === 0) {
                            obj[item] = arr[index + 1]
                        }
                        return obj;
                      },
                      {});
}

let message = prompt('Enter message', '');
console.log(createObjFromStr(message));

