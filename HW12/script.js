"use strict";

class Show {
  constructor() {}
  showCreate(createdAnimal) {
    console.log(`Created animal is ${createdAnimal}`);
  }

  showDelete(deletedAnimal) {
    console.log(`Deleted animal is ${deletedAnimal}`);
  }
}

class WatchAnimals extends Show {
  constructor() {
    super();
  }

  watchCreate(createdAnimal) {
    super.showCreate(createdAnimal);
  }

  watchDelete(deletedAnimal) {
    super.showDelete(deletedAnimal);
  }
}

class Animals extends WatchAnimals {
  _zoo = [];
  constructor() {
    super();
  }

  create(animal) {
    this._zoo.push(animal);
    super.watchCreate(animal.name);
  }

  delete(animalName) {
    this._zoo.splice(
      this._zoo.findIndex(item => item.name === animalName),
      1
    );
    super.watchDelete(animalName);
  }
}

let animals = new Animals();

animals.create({ name: "cat" });
animals.create({ name: "dog" });
animals.create({ name: "goat" });
animals.create({ name: "rabbit" });
animals.delete("goat");
