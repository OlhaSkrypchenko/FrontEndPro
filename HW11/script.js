"use strict";

// SOLUTION 1 with class

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

// SOLUTION 2 with prototype inheritance

function Adult1(name) {
  this.name = name;
}

Adult1.prototype.run = function() {
  console.log(`${this.name} run`);
};

Adult1.prototype.go = function() {
  console.log(`${this.name} go`);
};

Adult1.prototype.say = function() {
  console.log(`${this.name} say`);
};

function Toddler1(name) {
  this.name = name;
}

Toddler1.prototype = Object.create(Adult1.prototype);
Toddler1.prototype.constructor = Toddler1;

Toddler1.prototype.run = function() {
  console.log(`${this.name} run slower`);
};

Toddler1.prototype.go = function() {
  console.log(`${this.name} go slower`);
};

Toddler1.prototype.say = undefined;

let child1 = new Toddler1("Ivan 1");
child1.run();

//SOLUTION 3 with functional inheritance

function Adult2(name) {
  this.name = name;

  this.run = function() {
    console.log(`${this.name} run`);
  };

  this.go = function() {
    console.log(`${this.name} go`);
  };

  this.say = function() {
    console.log(`${this.name} say`);
  };
}

function Toddler2(name) {
  Adult2.apply(this, arguments);

  this.run = function() {
    console.log(`${this.name} run slower`);
  };

  this.go = function() {
    console.log(`${this.name} go slower`);
  };

  this.say = undefined;
}

let child2 = new Toddler2("Ivan 2");
child2.go();
