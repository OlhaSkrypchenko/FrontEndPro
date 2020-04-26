"use strict";

const container = document.querySelector(".c-currency-exchange");
const url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
const select = document.querySelector(".c-currency");

//Date
function getCurrentDate() {
  const currentDate = new Date();
  const date = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  if (month < 10) {
    month = `0${month}`;
  }

  return `${date}.${month}.${year}`;
}

function renderDate() {
  const date = document.querySelector(".c-date");
  date.innerText = `${getCurrentDate()}`;
}

renderDate();

// Data

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function getCurrency(e) {
  return e.currentTarget.value.toUpperCase();
}

function getPickedCurrency(data) {
  const currency = getCurrency(event);
  const pickedCurrency = data.filter((elem) => elem.ccy === currency)[0];
  return pickedCurrency;
}

function createTable(data) {
  const table = document.querySelector(".c-table");
  table.innerHTML = "";
  const pickedCurrency = getPickedCurrency(data);

  if (typeof pickedCurrency === "undefined") {
    table.innerText = "Ви не обрали валюту";
    return;
  }

  const name = document.createElement("td");
  name.innerText = pickedCurrency.ccy;

  const buy = document.createElement("td");
  buy.innerText = parseFloat(pickedCurrency.buy);

  const sale = document.createElement("td");
  sale.innerText = parseFloat(pickedCurrency.sale);

  const trow = document.createElement("tr");
  trow.append(name, buy, sale);

  const thName = document.createElement("th");
  thName.innerText = "Валюта";
  const thBuy = document.createElement("th");
  thBuy.innerText = "Покупка";
  const thSale = document.createElement("th");
  thSale.innerText = "Продажа";

  const tHeadrow = document.createElement("tr");
  tHeadrow.append(thName, thBuy, thSale);

  table.append(tHeadrow, trow);
}

async function launch(url) {
  const data = await getData(url);
  select.addEventListener("click", () => {
    createTable(data);
  });
}

launch(url);
