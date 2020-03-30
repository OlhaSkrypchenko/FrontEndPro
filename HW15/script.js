"use strict";

const data = {
  title: "Индекс Биг Мака",
  text: `Индекс Бига Мака - это стоимость гамбургера в сети Мак Дональдс. Биг мак
    содержит мясо, овощи, сыр, хлеб и другие продукты. <br />
    В его стоимость так же входят аренда помещения и оборудования, рабочая
    сила и многие другие факторы. <br />
    Если ценв бига мака низкая то можно сказать что цены в стране низкие,
    если высокая то и цены относительно высокаие. <br />
    Исследования проводятся журналом &#171;The Economist&#187;.`,
  table: {
    caption: "Индекс Биг Мака в разных странах",
    data: [
      { year: 2012, russia: 2.62, gb: 4.5, usa: 4.33, israel: 3.99 },
      { year: 2013, russia: 2.64, gb: 4.51, usa: 2.9, israel: 4.15 },
      { year: 2014, russia: 2.6, gb: 4.66, usa: 4.68, israel: 4.18 }
    ],
    columns: [
      { header: "Год" },
      { header: "Россия" },
      { header: "Великобритания" },
      { header: "США" },
      { header: "Израиль" }
    ]
  },
  list: {
    title: "Интересные факты:",
    data: [
      {
        text: `По мнению экспертов журнала &#171;The Economist&#187; российский
            рубль, наряду с валютами таких стран, как Украина, Египет,
            Филлипины, Агрентина, Гонконг, Индонезия, <br />
            Таиланд, Малайзия, недооценен примерно на 50%`
      },
      {
        text: `В 2015 году самым дешевым Биг-Маком можно "полакамиться" в Венесуэле
        - зв 0,67 доллара (недооценака на 86%), потом идет Украина - 1,55 $
        (-67,7 %), а за ними Индия, <br />
        где цена на этот бутерброд 1,83 доллара (-61,7%).`
      },
      {
        text: `Самый дорогой Биг-Мак можно купить в Швейцарии - за 6,83 доллара
        (+42,4%), затем идут Норвегия - 5,65 $ (+17,9%), Швеция - 5,13 $
        (+7%) и Дания - 5,08 $ (+6%).`
      }
    ]
  }
};

function createMainTitle(title) {
  let mainTitle = document.createElement("h1");
  mainTitle.innerText = title;

  return mainTitle;
}

function createParagraph(text) {
  let paragraph = document.createElement("p");
  paragraph.innerHTML = text;

  return paragraph;
}

function createThead(data) {
  let thead = document.createElement("thead");

  let tr = document.createElement("tr");

  for (let i = 0; i < data.length; i++) {
    let td = document.createElement("th");
    td.innerText = data[i].header;
    tr.append(td);
  }

  thead.append(tr);

  return thead;
}

function createTbody(data) {
  let tbody = document.createElement("tbody");

  for (let i = 0; i < data.length; i++) {
    let tr = document.createElement("tr");
    for (let key in data[i]) {
      let td = document.createElement("td");
      td.innerText = data[i][key];
      tr.append(td);
    }
    tbody.append(tr);
  }

  return tbody;
}

function createTable(tableCaption, tableColumns, tableData) {
  let table = document.createElement("table");
  let caption = document.createElement("caption");
  caption.innerText = tableCaption;
  table.append(caption, createThead(tableColumns), createTbody(tableData));

  return table;
}

function createListSection(title, data) {
  let section = document.createElement("section");
  let sectionTitle = document.createElement("h4");
  sectionTitle.innerText = title;

  let list = document.createElement("ol");

  for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = data[i].text;
    list.append(li);
  }

  section.append(sectionTitle, list);
  return section;
}

function createApp(data) {
  const app = document.createElement("div");
  app.classList.add("app");
  app.append(
    createMainTitle(data.title),
    createParagraph(data.text),
    createTable(data.table.caption, data.table.columns, data.table.data),
    createListSection(data.list.title, data.list.data)
  );

  return app;
}

function render(data) {
  document.body.prepend(createApp(data));
}

render(data);
