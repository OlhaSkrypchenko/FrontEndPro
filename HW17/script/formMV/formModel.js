export class FormModel {
  constructor() {
    if (!localStorage.getItem("usersList")) {
      localStorage.setItem("usersList", JSON.stringify([]));
    }
  }

  get _data() {
    return JSON.parse(localStorage.getItem("usersList"));
  }

  addUser({ name, secondName, age }) {
    const user = {
      id: this._data.length > 0 ? this._data[this._data.length - 1].id + 1 : 1,
      name,
      secondName,
      age,
    };

    localStorage.setItem("usersList", JSON.stringify([...this._data, user]));
  }
}
