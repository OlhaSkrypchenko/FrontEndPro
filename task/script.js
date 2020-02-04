let login = prompt('Enter your login', '');
let loginRegexp = /^[A-Z][A-Za-z]+[\d]{2}$/;

console.log(loginRegexp.test(login));


let password = prompt('Enter your password', '');
let passwordRegexp = /^[A-ZА-Я]{1,5}$/;

console.log(passwordRegexp.test(password));