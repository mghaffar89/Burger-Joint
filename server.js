const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burger_controllers.js");

var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

burgers = [];

app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
