import {
  createBasicElement,
  appendChild,
  getElement,
  appendChildren,
} from "../reusable/reusableFunctions";

import { createButton, createInputRow } from "../reusable/elements";

export class ListView {
  constructor() {
    this.title = createBasicElement({
      element: "h1",
      className: "c-title",
      children: "Список фамилий",
    });
    this.backToFormButton = createButton({
      type: "button",
      value: "backToForm",
      className: ["c-button", "c-button__backToForm"],
      children: "Назад",
    });
    this.ul = createBasicElement({ element: "ul" });
    this.content = createBasicElement({
      element: "div",
      className: "c-container",
    });

    this.form = createBasicElement({
      element: "form",
      className: "c-form",
      attributes: {
        action: "#",
        method: "POST",
        name: "editingForm",
      },
    });

    this.app = getElement(".app");
  }

  renderPage(usersList) {
    this.app.innerHTML = "";

    appendChildren(this.content, [this.title, this.backToFormButton, this.ul]);
    appendChild(this.app, this.content);

    this.createList(usersList);
  }

  createList(usersList) {
    while (this.ul.firstChild) {
      this.ul.removeChild(this.ul.firstChild);
    }

    if (usersList.length === 0) {
      const text = createBasicElement({
        element: "p",
        className: "c-text",
        children: "В базе данных пока нет пользователей",
      });
      appendChild(this.ul, text);
      return;
    }

    usersList.forEach((el) => {
      const editButton = createButton({
        type: "button",
        value: "edit",
        className: ["c-button", "c-button--edit"],
        children: "Изменить",
      });
      editButton.setAttribute("data-edit-id", el.id);

      const deleteButton = createButton({
        type: "button",
        value: "delete",
        className: ["c-button", "c-button--delete"],
        children: "X",
      });
      deleteButton.setAttribute("data-id", el.id);

      const buttonContainer = createBasicElement({
        element: "div",
        className: "c-button-container",
        children: [editButton, deleteButton],
      });

      const span = createBasicElement({
        element: "span",
        children: el.secondName,
      });

      const li = createBasicElement({
        element: "li",
        attributes: { id: `${el.id}` },
        children: [span, buttonContainer],
      });
      li.setAttribute("data-li-id", el.id);
      appendChild(this.ul, li);
    });

    appendChild(this.content, this.ul);
  }

  createEditingForm(user) {
    this.form.innerHTML = "";
    this.nameInputRow = createInputRow({
      inputId: "name",
      labelText: "Имя",
      type: "text",
      name: "name",
      id: "name",
      required: "required",
    });

    this.secondNameInputRow = createInputRow({
      inputId: "secondName",
      labelText: "Фамилия",
      type: "text",
      name: "secondName",
      id: "secondName",
      required: "required",
    });

    this.ageInputRow = createInputRow({
      inputId: "age",
      labelText: "Возраст",
      type: "number",
      name: "age",
      id: "age",
      min: 1,
      max: 100,
      required: "required",
    });

    this.savingButton = createButton({
      type: "submit",
      value: "save",
      children: "Готово",
    });

    this.formContent = createBasicElement({
      element: "div",
      className: "l-content",
      children: [
        this.nameInputRow,
        this.secondNameInputRow,
        this.ageInputRow,
        this.savingButton,
      ],
    });

    this.id = user.id;
    this.parentLi = getElement(`[data-li-id='${this.id}']`);
    this.parentLi.innerHTML = "";

    appendChildren(this.form, this.formContent);
    appendChild(this.parentLi, this.form);

    this.nameInput = getElement("#name");
    this.secondNameInput = getElement("#secondName");
    this.ageInput = getElement("#age");

    this.nameInput.value = user.name;
    this.secondNameInput.value = user.secondName;
    this.ageInput.value = user.age;
  }

  get _inputValues() {
    return {
      id: this.id,
      name: this.nameInput.value,
      secondName: this.secondNameInput.value,
      age: this.ageInput.value,
    };
  }

  bindDeleteUser(handler) {
    this.ul.addEventListener("click", (event) => {
      const dataId = event.target.dataset.id;

      if (!dataId) {
        return;
      }

      const id = parseInt(event.target.parentElement.parentElement.id);

      handler(id);
    });
  }

  bindCreateEditingForm(handler) {
    this.ul.addEventListener("click", (event) => {
      const dataEditId = event.target.dataset.editId;

      if (!dataEditId) {
        return;
      }

      const id = parseInt(event.target.parentElement.parentElement.id);

      handler(id);
    });
  }

  bindEditUser(handler) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (this._inputValues) {
        handler(this._inputValues);
      }
    });
  }

  bindRenderFormPage(handler) {
    this.backToFormButton.addEventListener("click", () => {
      handler();
    });
  }
}
