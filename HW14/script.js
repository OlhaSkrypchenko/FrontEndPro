"use strict";

class Creature {
  constructor(view, list) {
    this.view = view;
    this.list = list;
  }

  add(creature) {
    this.list.unshift(creature);
    this.handleShowCreature(creature.name, "was added", this.list);
  }

  delete(name) {
    let isFinded = this.list.findIndex(el => el.name === name);
    if (isFinded >= 0) {
      this.list.splice(isFinded, 1);
      this.handleShowCreature(name, "was deleted", this.list);
    }
  }

  handleShowCreature(name, massage, list) {
    this.view.showCreature(name, massage);
    this.view.showList(list);
  }
}

class Human extends Creature {
  constructor(view, list) {
    super(view, list);
  }

  add(people) {
    this.list.unshift(people);
    this.handleShowCreature(people.name, "was added", this.list);
  }
}

class Animal extends Creature {
  constructor(view, list) {
    super(view, list);
  }

  add(animal) {
    this.list.push(animal);
    this.handleShowCreature(animal.name, "was added", this.list);
  }
}

class CreatureView {
  showCreature(name, massage) {
    console.log(`${name} ${massage}`);
  }

  showList(list) {
    console.log(list);
  }
}

class CreatureController {
  constructor(model) {
    this.model = model;
  }

  handleAdd(creature) {
    this.model.add(creature);
  }

  handleDelete(name) {
    this.model.delete(name);
  }
}

let creatures = [];

let view = new CreatureView();
let humanModel = new Human(view, creatures);
let humanController = new CreatureController(humanModel);

let animalModel = new Animal(view, creatures);
let animalController = new CreatureController(animalModel);

humanController.handleAdd({ name: "John" });
humanController.handleAdd({ name: "Adam" });
humanController.handleDelete("John");

animalController.handleAdd({ name: "tiger" });
animalController.handleAdd({ name: "hippo" });
animalController.handleDelete("tiger");
