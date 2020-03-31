"use strict";

function appendChild(element, children = "") {
  if (children === null) {
    return;
  }

  if (typeof children === "string" || typeof children === "number") {
    return (element.innerText += children);
  }

  return element.append(children);
}

function appendChildren(element, children = "") {
  if (Array.isArray(children)) {
    children.forEach(el => appendChild(element, el));
  } else {
    appendChild(element, children);
  }
}

function createBasicElement({
  element,
  className,
  attributes = {},
  children = ""
}) {
  const el = document.createElement(element);

  if (typeof className === "string") {
    el.classList.add(className);
  } else {
    el.classList.add(...className);
  }

  for (let key in attributes) {
    el.setAttribute(key, attributes[key]);
  }

  appendChildren(el, children);

  return el;
}

function createMark() {
  const mark = createBasicElement({
    element: "span",
    className: "c-mark",
    children: " *"
  });

  return mark;
}

const title = createBasicElement({
  element: "h1",
  className: "c-title",
  children: "Форма заявки на работу в зоопарке"
});

const text = createBasicElement({
  element: "p",
  className: "c-text",
  children: [
    "Пожалуйста заполните форму. Обязательные поля помечены",
    createMark()
  ]
});

const header = createBasicElement({
  element: "div",
  className: "l-header",
  children: [title, text]
});

function createLabel({
  className = "c-label",
  inputId,
  labelText,
  marks = "",
  child = ""
}) {
  let labelChildren =
    typeof marks !== "string" ? [labelText, marks] : [labelText, child];
  const label = createBasicElement({
    element: "label",
    className,
    ...(inputId && { attributes: { for: inputId } }),
    children: labelChildren
  });

  return label;
}

function createInput({ className = "c-input", ...attributes }) {
  let input = createBasicElement({
    element: "input",
    className,
    attributes
  });

  return input;
}

function createOption({ value, children }) {
  let option = createBasicElement({
    element: "option",
    className: "c-select__option",
    attributes: { value },
    children
  });

  return option;
}

function createSelect() {
  const femaleOption = createOption({ value: "female", children: "Женщина" });
  const maleOption = createOption({ value: "male", children: "Мужчина" });
  const otherOption = createOption({ value: "other", children: "Другое" });

  const select = createBasicElement({
    element: "select",
    className: "c-select",
    attributes: { name: "userGender", id: "userGender" },
    children: [femaleOption, maleOption, otherOption]
  });

  return select;
}

function createCheckboxContainer({ inputId, labelText, ...inputAttr }) {
  const label = createLabel({ inputId, labelText });
  const checkbox = createInput({ ...inputAttr });
  const container = createBasicElement({
    element: "div",
    className: "l-checkbox",
    children: [checkbox, label]
  });

  return container;
}

function createRow(children) {
  const row = createBasicElement({
    element: "div",
    className: "l-row",
    children
  });

  return row;
}

function createInputRow({ inputId, labelText, marks, element, ...inputAttr }) {
  const label = createLabel({
    inputId,
    labelText,
    marks
  });

  let el;

  switch (element) {
    case "input":
      el = createInput({
        ...inputAttr
      });
      break;
    case "select":
      el = createSelect();
      break;
    case "textarea":
      el = createBasicElement({
        element: "textarea",
        className: "c-textarea",
        attributes: { name: "personality", id: "personality", rows: "7" }
      });
      break;
  }

  return createRow([label, el]);
}

function createFieldset(legendName, children) {
  let legend = createBasicElement({
    element: "legend",
    className: "c-legend",
    children: legendName
  });

  let fieldsetChildren = Array.isArray(children)
    ? [legend, ...children]
    : [legend, children];

  const fieldset = createBasicElement({
    element: "fieldset",
    className: "c-fieldset",
    children: fieldsetChildren
  });

  return fieldset;
}

function createContactFieldset() {
  const nameInputRow = createInputRow({
    inputId: "userName",
    labelText: "Имя",
    marks: createMark(),
    element: "input",
    type: "text",
    id: "userName",
    required: "required"
  });

  const telInputRow = createInputRow({
    inputId: "phoneNumber",
    labelText: "Телефон",
    element: "input",
    type: "tel",
    id: "phoneNumber",
    pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}"
  });

  const emailInputRow = createInputRow({
    inputId: "email",
    labelText: "Email",
    marks: createMark(),
    element: "input",
    type: "email",
    id: "email",
    required: "required"
  });

  return createFieldset("Контактная информация", [
    nameInputRow,
    telInputRow,
    emailInputRow
  ]);
}

function createPersonalityFieldset() {
  const ageInputRow = createInputRow({
    inputId: "userAge",
    labelText: "Возраст",
    marks: createMark(),
    element: "input",
    type: "number",
    id: "userAge",
    min: "18",
    max: "65",
    required: "required"
  });

  const genderInputRow = createInputRow({
    inputId: "userGender",
    labelText: "Пол",
    element: "select"
  });

  const personalityInputRow = createInputRow({
    inputId: "personality",
    labelText: "Перечислите личные качества",
    element: "textarea"
  });

  return createFieldset("Персональная информация", [
    ageInputRow,
    genderInputRow,
    personalityInputRow
  ]);
}

function createFavAnimalsFieldset() {
  const checkbox1 = createCheckboxContainer({
    inputId: "zebra",
    labelText: "Зебра",
    className: "c-checkbox",
    type: "checkbox",
    id: "zebra",
    value: "zebra",
    name: "animals"
  });

  const checkbox2 = createCheckboxContainer({
    inputId: "cat",
    labelText: "Кошак",
    className: "c-checkbox",
    type: "checkbox",
    id: "cat",
    value: "cat",
    name: "animals"
  });

  const checkbox3 = createCheckboxContainer({
    inputId: "anaconda",
    labelText: "Анаконда",
    className: "c-checkbox",
    type: "checkbox",
    id: "anaconda",
    value: "anaconda",
    name: "animals"
  });

  const checkbox4 = createCheckboxContainer({
    inputId: "human",
    labelText: "Человек",
    className: "c-checkbox",
    type: "checkbox",
    id: "human",
    value: "human",
    name: "animals"
  });

  const checkbox5 = createCheckboxContainer({
    inputId: "elephant",
    labelText: "Слон",
    className: "c-checkbox",
    type: "checkbox",
    id: "elephant",
    value: "elephant",
    name: "animals"
  });

  const checkbox6 = createCheckboxContainer({
    inputId: "antelope",
    labelText: "Антилопа",
    className: "c-checkbox",
    type: "checkbox",
    id: "antelope",
    value: "antelope",
    name: "animals"
  });

  const checkbox7 = createCheckboxContainer({
    inputId: "dove",
    labelText: "Голубь",
    className: "c-checkbox",
    type: "checkbox",
    id: "dove",
    value: "dove",
    name: "animals"
  });

  const checkbox8 = createCheckboxContainer({
    inputId: "crab",
    labelText: "Краб",
    className: "c-checkbox",
    type: "checkbox",
    id: "crab",
    value: "crab",
    name: "animals"
  });

  const row = createRow([
    checkbox1,
    checkbox2,
    checkbox3,
    checkbox4,
    checkbox5,
    checkbox6,
    checkbox7,
    checkbox8
  ]);

  return createFieldset("Выберите ваших любимых животных", row);
}

const contactFieldset = createContactFieldset();
const personalityFieldset = createPersonalityFieldset();
const favAnimalsFieldset = createFavAnimalsFieldset();

const button = createBasicElement({
  element: "button",
  className: "c-button",
  attributes: { type: "submit", value: "submit" },
  children: "Отправить информацию"
});

const content = createBasicElement({
  element: "div",
  className: "l-content",
  children: [contactFieldset, personalityFieldset, favAnimalsFieldset, button]
});

const form = createBasicElement({
  element: "form",
  className: "c-form",
  attributes: {
    action: "#",
    method: "POST",
    name: "applyingForm"
  },
  children: [header, content]
});

function render() {
  let app = document.body.querySelector(".app");
  appendChild(app, form);
}

render();
