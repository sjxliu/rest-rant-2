// Dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");
// const mongoose = require("mongoose")

// Express settings
app.use(express.static("public"));
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//Controllers and routes
app.use("/places", require("./controllers/places_control"));

app.get("/", (req, res) => {
  // res.send("home")

  res.render("home");
});

app.get("*", (req, res) => {
  res.render("error404");
});

app.listen(process.env.PORT);
console.log("I have risen");
