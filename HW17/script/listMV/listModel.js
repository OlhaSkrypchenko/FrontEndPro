export class ListModel {
  constructor() {
    if (!localStorage.getItem("usersList")) {
      localStorage.setItem("usersList", JSON.stringify([]));
    }
  }

  get _data() {
    return JSON.parse(localStorage.getItem("usersList"));
  }

  _onDataChange(data) {
    localStorage.setItem("usersList", JSON.stringify(data));
    this.onUsersListChanged(this._data);
  }

  deleteUser(id) {
    const data = this._data.filter((el) => el.id !== id);

    this._onDataChange(data);
  }

  getUser(id) {
    return this._data.find((el) => el.id === id);
  }

  editUser({ id, name, secondName, age }) {
    const data = this._data.map((user) =>
      user.id === id
        ? {
            id: id,
            name: name,
            secondName: secondName,
            age: age,
          }
        : user
    );
    this._onDataChange(data);
  }

  bindUserListChanged(callback) {
    this.onUsersListChanged = callback;
  }
}
