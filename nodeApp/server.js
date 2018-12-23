// Imports
const express = require("express");

// Globals
const app = express();
const port = 3000;

// Install json parser
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

app.listen(port, function(){
    console.log("I am a rest up!");
    console.log("");
});

app.get("/", function(req, res) {
    res.status(200).send("<h1>I am rest up! No really I am :)</h1>");
});

app.get("/healthcheck", (req, res) => {
    res.status(200).send("<h1>I am a healthy rest app!</h1>");
});

app.get("/work", (req, res) => {
    res.status(200).send("<h1>I am a very working rest app!</h1>");
})