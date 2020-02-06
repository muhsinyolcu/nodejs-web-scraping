var express = require("express");
var app = express();
var cors = require("cors");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cors configurations
app.use(cors());
app.options("*", cors());

//Routes
app.use(require("./routes/index.routes"));

app.listen(8080, () => {
  console.log("Running on 8080");
});
