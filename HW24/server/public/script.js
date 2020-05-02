"use strict";

async function getData() {
  let response = await fetch("http://localhost:3000/users");
  let users = await response.json();

  return users;
}

async function renderData() {
  try {
    const users = await getData();

    const div = document.querySelector("div");
    const ul = document.createElement("ul");
    div.innerHTML = "";
    div.append(ul);

    users.forEach((user) => {
      const li = document.createElement("li");
      li.innerText = user.name;
      ul.append(li);
    });
  } catch (error) {
    throw new Error(error);
  }
}

const button = document.querySelector("#button");
button.addEventListener("click", renderData);
