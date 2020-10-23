"use strict";

var express = require('express');

var app = express();
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
});
app.get("/sobre", function (req, res) {
  res.sendFile(__dirname + "/html/sobre.html");
});
app.get("/blog", function (req, res) {
  res.send("Meu blog.");
});
app.get("/ola/:nome/:cargo/:cor", function (req, res) {
  res.send("<h2>Olá, " + req.params.nome + "</h1>" + "<h2>Seu cargo é :" + req.params.cargo + "</h2>" + "<h3>Sua cor favorita é: " + req.params.cor + "<h3>");
});
app.listen(8081, function () {
  console.log("App rodando na url http://localhost:8081");
});