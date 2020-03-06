"use strict";

class Adult {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`${this.name} run`);
  }

  go() {
    console.log(`${this.name} go`);
  }

  say() {
    console.log(`${this.name} say`);
  }
}

class Toddler extends Adult {
  constructor(options) {
    super(options);
  }

  run() {
    console.log(`${this.name} run slower`);
  }

  go() {
    console.log(`${this.name} go slower`);
  }

  get say() {
    return undefined;
  }
}

class Creator {
  constructor() {}

  static createInstance(parentClass, options) {
    return new parentClass(options);
  }
}

let child = Creator.createInstance(Toddler, "Ivan");

child.run();
