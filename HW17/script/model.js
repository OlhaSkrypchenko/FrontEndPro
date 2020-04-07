export class Model {
  constructor() {
    this.usersList = JSON.parse(localStorage.getItem("usersList")) || [];
  }

  _onDataChange() {
    this.onUsersListChanged(this.usersList);
    localStorage.setItem("usersList", JSON.stringify(this.usersList));
  }

  addUser({ name, secondName, age }) {
    const user = {
      id: this.usersList.length,
      name,
      secondName,
      age,
    };

    this.usersList.push(user);

    localStorage.setItem("usersList", JSON.stringify(this.usersList));
  }

  deleteUser(id) {
    this.usersList = this.usersList.filter((el) => el.id !== id);

    this._onDataChange();
  }

  getUser(id) {
    return this.usersList.find((el) => el.id === id);
  }

  editUser({ id, name, secondName, age }) {
    this.usersList = this.usersList.map((user) =>
      user.id === id
        ? {
            id: id,
            name: name,
            secondName: secondName,
            age: age,
          }
        : user
    );
    this._onDataChange();
  }

  bindUserListChanged(callback) {
    this.onUsersListChanged = callback;
  }
}
