export class Controller {
  constructor(model, formView, listView) {
    this.model = model;
    this.formView = formView;
    this.listView = listView;

    this.model.bindUserListChanged(this.onUsersListChanged.bind(this));
    this.onUsersListChanged(this.model.usersList);
  }

  onUsersListChanged(usersList) {
    this.listView.createList(usersList);
  }

  handleAddUser(inputValues) {
    this.model.addUser(inputValues);
  }

  handleDeleteUser(id) {
    this.model.deleteUser(id);
  }

  handleCreateEditingForm(id) {
    this.listView.renderPage(this.model.usersList);
    this.listView.createEditingForm(this.model.getUser(id));
  }

  handleEditUser(id) {
    this.model.editUser(id);
  }

  handlerRenderList() {
    this.listView.renderPage(this.model.usersList);
    this.listView.bindDeleteUser(this.handleDeleteUser.bind(this));
    this.listView.bindRenderFormPage(this.handlerRenderForm.bind(this));
    this.listView.bindCreateEditingForm(
      this.handleCreateEditingForm.bind(this)
    );
    this.listView.bindEditUser(this.handleEditUser.bind(this));
  }

  handlerRenderForm() {
    this.formView.renderFormPage();
    this.formView.bindAddUser(this.handleAddUser.bind(this));
    this.formView.bindRenderList(this.handlerRenderList.bind(this));
  }
}
