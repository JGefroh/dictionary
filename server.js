const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const router = express.Router();
const exec = require('child_process').exec;
const randomWord = require('random-word');


const port = process.env.PORT || 8080;
var server = require('http').createServer(app);
var http = require("http");
var https = require("https");

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use('/', router);
router.get('/word', (req, res) => {
  res.send({word: randomWord()});
});

server.listen(port);
console.info(`Listening ${port}`)
