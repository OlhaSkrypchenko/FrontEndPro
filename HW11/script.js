"use strict";

/*  Напишите 3 конструктора. 
1. В первом конструкторе есть три метода: run, go, say. 
2. Во втором два метода: run,go, но с другим функционалом. 
3. В третьем конструкторе только статический метод, который создает объекты из конструктора, 
имя которого указано в параметрах. */

class AncientHuman {
  constructor() {}

  run() {
    console.log("run");
  }

  go() {
    console.log("go");
  }
}

class Human extends AncientHuman {
  constructor(name) {
    super();
    this.name = name;
  }

  run() {
    super.run();
    console.log("faster");
  }

  go() {
    super.go();
    console.log("longer");
  }

  say() {
    console.log("say");
  }
}

class Creator {
  constructor() {}

  static createInstance(creator, options) {
    return new creator(options);
  }
}

let man = Creator.createInstance(Human, "Ivan");

console.log(man.name);
man.go();
