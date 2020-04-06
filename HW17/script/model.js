export class Model {
  constructor() {
    this.usersList = [];
  }

  addUser({ name, secondName, age }) {
    const user = {
      id: this.usersList.length,
      name,
      secondName,
      age
    };

    this.usersList.push(user);
  }

  deleteUser(id) {
    this.usersList = this.usersList.filter(el => el.id != id);
    this.onUsersListChanged(this.usersList);
  }

  bindUserListChanged(callback) {
    this.onUsersListChanged = callback;
  }
}
