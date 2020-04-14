"use strict";

class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((el) => el !== observer);
  }

  notify(value) {
    this.observers.forEach((func) => func(value));
  }
}

const observable = new Observable();

function createDiv() {
  const app = document.querySelector(".app");
  const div = document.createElement("div");
  div.classList.add("new-div");
  observable.subscribe((val) => {
    div.innerText = val;
  });
  app.append(div);
}

const button = document.querySelector(".button");
button.addEventListener("click", createDiv);

const input = document.querySelector(".text-field");
input.addEventListener("input", () => observable.notify(input.value));
