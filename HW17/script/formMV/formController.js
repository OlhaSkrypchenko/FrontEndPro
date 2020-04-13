export class FormController {
  constructor(formModel, formView, routePage) {
    this.formModel = formModel;
    this.formView = formView;
    this.routePage = routePage;

    this.routePage.subscribe("showForm", this.handlerRenderForm.bind(this));
  }

  handleAddUser(inputValues) {
    this.formModel.addUser(inputValues);
  }

  handlerRenderForm() {
    this.formView.renderFormPage();
    this.formView.bindAddUser(this.handleAddUser.bind(this));
    this.formView.bindRenderList(this.handlerRenderList.bind(this));
  }

  handlerRenderList() {
    this.routePage.publish("showList");
  }
}
