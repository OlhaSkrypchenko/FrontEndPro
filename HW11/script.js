"use strict";

/*  Напишите 3 конструктора. 
1. В первом конструкторе есть три метода: run, go, say. 
2. Во втором два метода: run,go, но с другим функционалом. 
3. В третьем конструкторе только статический метод, который создает объекты из конструктора, 
имя которого указано в параметрах. */

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

  say() {
    return (super.say = undefined);
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
child.say();
