import {
  createBasicElement,
  appendChild,
  getElement
} from "./reusableFunctions";

import { createMark, createButton, createInputRow } from "./elements";

export class FormView {
  constructor() {}

  renderFormPage() {
    this.title = createBasicElement({
      element: "h1",
      className: "c-title",
      children: "Coздать пользователя"
    });

    this.header = createBasicElement({
      element: "div",
      className: "l-header",
      children: this.title
    });

    this.nameInputRow = createInputRow({
      inputId: "name",
      labelText: "Имя",
      marks: createMark(),
      type: "text",
      name: "name",
      id: "name",
      required: "required"
    });

    this.secondNameInputRow = createInputRow({
      inputId: "secondName",
      labelText: "Фамилия",
      marks: createMark(),
      type: "text",
      name: "secondName",
      id: "secondName",
      required: "required"
    });

    this.ageInputRow = createInputRow({
      inputId: "age",
      labelText: "Возраст",
      marks: createMark(),
      type: "number",
      name: "age",
      id: "age",
      min: 1,
      max: 100,
      required: "required"
    });

    this.addingButton = createButton({
      type: "submit",
      value: "add",
      children: "ADD"
    });

    this.showingButton = createButton({
      type: "button",
      value: "show",
      children: "SHOW"
    });

    this.content = createBasicElement({
      element: "div",
      className: "l-content",
      children: [
        this.nameInputRow,
        this.secondNameInputRow,
        this.ageInputRow,
        this.addingButton,
        this.showingButton
      ]
    });

    this.form = createBasicElement({
      element: "form",
      className: "c-form",
      attributes: {
        action: "#",
        method: "POST",
        name: "applyingForm"
      },
      children: [this.header, this.content]
    });

    this.app = getElement(".app");
    this.app.innerHTML = "";
    appendChild(this.app, this.form);

    this.nameInput = getElement("#name");
    this.secondNameInput = getElement("#secondName");
    this.ageInput = getElement("#age");
  }

  get _inputValues() {
    return {
      name: this.nameInput.value,
      secondName: this.secondNameInput.value,
      age: this.ageInput.value
    };
  }

  _resetInputValues() {
    this.nameInput.value = "";
    this.secondNameInput.value = "";
    this.ageInput.value = "";
  }

  bindAddUser(handler) {
    this.form.addEventListener("submit", event => {
      event.preventDefault();

      if (this._inputValues) {
        handler(this._inputValues);
      }
      this._resetInputValues();
    });
  }

  bindRenderList(handler) {
    this.showingButton.addEventListener("click", () => {
      handler();
    });
  }
}
