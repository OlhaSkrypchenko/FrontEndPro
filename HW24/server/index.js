const express = require("express");
const axios = require("axios");
const port = 3000;
const app = express();

app.use(express.static("public"));

app.get("/users", async function (req, res) {
  let response = await axios.get("https://jsonplaceholder.typicode.com/users");
  res.send(response.data);
});

app.listen(port);
