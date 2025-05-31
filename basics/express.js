const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  fs.readFile("index.html", (err, data) => {
    res.setHeader("Content-Type", "text/html");
    res.send(data);
  });
});

app.get("/login", (req, res) => {
  fs.readFile("login.html", (err, data) => {
    res.setHeader("Content-Type", "text/html");
    res.send(data);
  });
});

app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
