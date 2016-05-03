const express = require("express");

const flags = require("./modules/flags.js");

const add = require("./modules/post.js");

const list = require("./modules/get.js");

const clearList = require("./modules/clear.js");

const remove = require("./modules/remove.js");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get('/todo', list.listItem);

app.get('/todo/done', list.listDone);

app.get('/todo/undone', list.listUnD);

app.get('/todo/:id(\\d+)', list.getItem);

app.post('/todo', add.addItem);

app.put('/todo/:id(\\d+)/done', flags.done);

app.put('/todo/:id(\\d+)/undone', flags.undone);

app.delete('/todo/:id(\\d+)', remove.removeItem);

app.delete('/todo', clearList.clearList);

app.listen(process.env.PORT, process.env.IP);
