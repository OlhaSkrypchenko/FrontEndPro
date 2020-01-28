'use strict';

let userName = 'Иванов Сергей Петрович';

let indexOfSpace = userName.indexOf(' ');

let indexOfLastSpace = userName.lastIndexOf(' ');

let shortUserName = userName.slice(0, indexOfSpace + 2) + "." + 
                    userName.slice(indexOfLastSpace + 1, indexOfLastSpace + 2) + '.';

console.log(shortUserName);