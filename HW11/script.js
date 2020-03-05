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
    console.log("run");
  }

  go() {
    console.log("go");
  }

  get say() {
    console.log("say");
  }
}

class Toddler extends Adult {
  constructor(options) {
    super(options);
  }

  run() {
    console.log("run slower");
  }

  go() {
    console.log("go slower");
  }

  //   get say() {
  //     console.log("say");
  //   }
}

class Creator {
  constructor() {}

  static createInstance(creator, options) {
    return new creator(options);
  }
}

let child = Creator.createInstance(Toddler, "Ivan");

console.log(child.name);
child.say();
