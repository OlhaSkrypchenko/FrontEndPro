"use strict";

const creatureTypes = {
  human: "human",
  animal: "animal"
};

class Creature {
  constructor(view, list) {
    this.view = view;
    this.list = list;
  }

  create(name) {
    return { name };
  }

  add(name) {
    let creature = this.create(name);
    this.list.unshift(creature);
    this.handleShowCreature(creature.name, "was added", this.list);
  }

  delete(name, type) {
    let isFinded = this.list.findIndex(
      el => el.name === name && el.type === type
    );
    if (isFinded >= 0) {
      this.list.splice(isFinded, 1);
      this.handleShowCreature(name, `- ${type} was deleted`, this.list);
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

  create(name) {
    return { ...super.create(name), type: creatureTypes.human };
  }
}

class Animal extends Creature {
  constructor(view, list) {
    super(view, list);
  }

  create(name) {
    return { ...super.create(name), type: creatureTypes.animal };
  }

  add(name) {
    let animal = this.create(name);
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
  constructor(model, type) {
    this.model = model;
    this.type = type;
  }

  handleAdd(creature) {
    this.model.add(creature);
  }

  handleDelete(name) {
    this.model.delete(name, this.type);
  }
}

let creatures = [];

let view = new CreatureView();
let humanModel = new Human(view, creatures);
let humanController = new CreatureController(humanModel, creatureTypes.human);

let animalModel = new Animal(view, creatures);
let animalController = new CreatureController(
  animalModel,
  creatureTypes.animal
);

humanController.handleAdd("John");
humanController.handleAdd("Adam");
humanController.handleDelete("John");

animalController.handleAdd("John");
animalController.handleAdd("Fluffy");
animalController.handleDelete("John");
