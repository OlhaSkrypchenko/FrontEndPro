import {
  createBasicElement,
  appendChild,
  getElement,
  appendChildren
} from "./reusableFunctions";

import { createButton, createInputRow } from "./elements";

export class ListView {
  constructor() {
    this.title = createBasicElement({
      element: "h1",
      className: "c-title",
      children: "Список фамилий"
    });
    this.backToFormButton = createButton({
      type: "button",
      value: "backToForm",
      className: ["c-button", "c-button__backToForm"],
      children: "Назад"
    });
    this.ul = createBasicElement({ element: "ul" });
    this.content = createBasicElement({
      element: "div",
      className: "c-container"
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
        children: "В базе данных пока нет пользователей"
      });
      appendChild(this.ul, text);
      return;
    }

    usersList.forEach(el => {
      const deleteButton = createButton({
        type: "button",
        value: "delete",
        "data-id": el.id,
        className: ["c-button", "c-button--delete"],
        children: "X"
      });
      deleteButton.setAttribute("data-id", el.id);

      const span = createBasicElement({
        element: "span",
        children: el.secondName
      });

      const li = createBasicElement({
        element: "li",
        attributes: { id: el.id },
        children: [span, deleteButton]
      });
      appendChild(this.ul, li);
    });

    appendChild(this.content, this.ul);
  }

  bindDeleteUser(handler) {
    this.ul.addEventListener("click", event => {
      const dataId = event.target.dataset.id;

      if (!dataId) {
        return;
      }

      const id = parseInt(event.target.parentElement.id);

      handler(id);
    });
  }

  bindRenderFormPage(handler) {
    this.backToFormButton.addEventListener("click", () => {
      handler();
    });
  }
}
