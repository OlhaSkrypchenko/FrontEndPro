export class ListController {
  constructor(listModel, listView, routePage) {
    this.listModel = listModel;
    this.listView = listView;
    this.routePage = routePage;

    this.routePage.subscribe("showList", this.handlerRenderList.bind(this));

    this.listModel.bindUserListChanged(this.onUsersListChanged.bind(this));
    this.onUsersListChanged(this.listModel._data);
  }

  onUsersListChanged(data) {
    this.listView.createList(data);
  }

  handleDeleteUser(id) {
    this.listModel.deleteUser(id);
  }

  handleCreateEditingForm(id) {
    this.listView.renderPage(this.listModel._data);
    this.listView.createEditingForm(this.listModel.getUser(id));
  }

  handleEditUser(id) {
    this.listModel.editUser(id);
  }

  handlerRenderList() {
    this.listView.renderPage(this.listModel._data);
    this.listView.bindDeleteUser(this.handleDeleteUser.bind(this));
    this.listView.bindCreateEditingForm(
      this.handleCreateEditingForm.bind(this)
    );
    this.listView.bindEditUser(this.handleEditUser.bind(this));
    this.listView.bindRenderFormPage(this.handlerRenderForm.bind(this));
  }

  handlerRenderForm() {
    this.routePage.publish("showForm");
  }
}
