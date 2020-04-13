"use strict";

export function appendChild(element, children = "") {
  if (children === null) {
    return;
  }

  if (typeof children === "string" || typeof children === "number") {
    return (element.innerText += children);
  }

  return element.append(children);
}

export function appendChildren(element, children = "") {
  if (Array.isArray(children)) {
    children.forEach(el => appendChild(element, el));
  } else {
    appendChild(element, children);
  }
}

export function createBasicElement({
  element,
  className = [],
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

export function getElement(selector) {
  return document.querySelector(selector);
}
