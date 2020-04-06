"use strict";

import { createBasicElement } from "./reusableFunctions";

export function createMark() {
  const mark = createBasicElement({
    element: "span",
    className: "c-mark",
    children: " *"
  });

  return mark;
}

export function createLabel({
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

export function createInput({ className = "c-input", ...attributes }) {
  let input = createBasicElement({
    element: "input",
    className,
    attributes
  });

  return input;
}

export function createButton({
  type,
  value,
  className = "c-button",
  children = ""
}) {
  let button = createBasicElement({
    element: "button",
    className: className,
    attributes: { type, value },
    children: children
  });

  return button;
}

export function createRow(children) {
  const row = createBasicElement({
    element: "div",
    className: "l-row",
    children
  });

  return row;
}

export function createInputRow({ inputId, labelText, marks, ...inputAttr }) {
  const label = createLabel({
    inputId,
    labelText,
    marks
  });

  let el = createInput({
    ...inputAttr
  });

  return createRow([label, el]);
}
