const express = require("express");
const fs = require(`fs`);
const app = express();

app.get(`/`, (req, res) => {
  if (req.url === "/") {
      fs.readFile("index.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    }else{
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 - Not Found");
    }
});

app.get(`/login.html`, (req, res) => {
  if (req.url === `login.html`){
    fs.readFile(`login.html`, (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  )}
  else{
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Not Found");
  }
});
app.get()
