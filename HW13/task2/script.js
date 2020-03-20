"use strict";

class Show {
  constructor() {}

  static showCorrect() {
    console.log("Пароль верный");
  }

  static showIncorrect() {
    console.log("Пароль неверный");
  }
}

class Password {
  constructor(password) {
    this.password = password;
  }

  correctPass = "bingo";

  checkPassword() {
    this.password === this.correctPass
      ? Show.showCorrect()
      : Show.showIncorrect();
  }
}

let enteredPass = prompt("Enter your password");
let password = new Password(enteredPass);
password.checkPassword();
