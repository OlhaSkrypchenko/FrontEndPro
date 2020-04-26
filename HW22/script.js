"use strict";

class Model {
  constructor() {
    this.data;
    this.url =
      "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
  }

  async _fetchData() {
    const response = await fetch(this.url);
    return await response.json();
  }

  async transformData() {
    const data = await this._fetchData();
    return (this.data = data
      .filter((el) => {
        if (el.ccy !== "BTC") {
          return el;
        }
      })
      .map((el) => {
        let { ccy, buy, sale } = el;
        return { ccy, buy, sale };
      }));
  }

  async getData() {
    if (this.data) {
      return this.data;
    }
    return this.transformData();
  }

  async getPickedCurrency(currency) {
    const data = await this.getData();
    return data.filter((elem) => elem.ccy === currency)[0];
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.handleRenderDate();

    this.view.bindPickedCurrency(this.handleRenderTable.bind(this));
  }

  handleRenderDate() {
    this.view.renderDate();
  }

  async handleRenderTable(targetCurrency) {
    try {
      const currency = await this.model.getPickedCurrency(targetCurrency);
      this.view.renderTable(currency);
    } catch (error) {
      this.view.renderError();
    }
  }
}

class View {
  constructor() {
    this.table = document.querySelector(".c-table");
    this.select = document.querySelector(".c-currency");
  }

  _getCurrentDate() {
    const currentDate = new Date();
    const date = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    if (month < 10) {
      month = `0${month}`;
    }

    return `${date}.${month}.${year}`;
  }

  renderDate() {
    const date = document.querySelector(".c-date");
    date.innerText = `${this._getCurrentDate()}`;
  }

  renderTable(data) {
    this.table.innerHTML = "";

    if (typeof data === "undefined") {
      this.table.innerText = "Ви не обрали валюту";
      return;
    }

    const tHeadRow = document.createElement("tr");
    const trow = document.createElement("tr");

    for (let key in data) {
      const th = document.createElement("th");
      th.innerText = key === "ccy" ? "currency" : key;
      tHeadRow.append(th);

      const td = document.createElement("td");
      td.innerText = data[key];
      trow.append(td);
    }

    this.table.append(tHeadRow, trow);
  }

  renderError() {
    this.table.innerHTML = "";
    this.table.innerText = "Щось пішло не так. Спробуйте пізніше";
  }

  bindPickedCurrency(handler) {
    this.select.addEventListener("click", (event) => {
      const pickedCurrency = event.currentTarget.value.toUpperCase();
      handler(pickedCurrency);
    });
  }
}

function launch() {
  const model = new Model();
  const view = new View();
  const controller = new Controller(model, view);
}

launch();
