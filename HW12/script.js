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
    let isFinded = this._zoo.findIndex(item => item.name === animalName);

    if (isFinded === -1) {
      console.log("We don't have such animal in the zoo");
    } else {
      let deletedAnimal = this._zoo.splice(isFinded, 1);
      super.watchDelete(deletedAnimal[0].name);
    }
  }

  get zoo() {
    console.log(this._zoo);
  }
}

let animals = new Animals();

animals.create({ name: "cat" });
animals.create({ name: "dog" });
animals.create({ name: "goat" });
animals.create({ name: "rabbit" });
animals.zoo;
animals.delete("goat");
animals.delete("df");
animals.zoo;
