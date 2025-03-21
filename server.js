// Loads the express module
const express = require("express");
const hbs = require("hbs");

const bodyParser = require("body-parser");

const path = require("path");

//Creates our express server
const app = express();
const port = 3000;

//Serves static files (we need it to import a css file)
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

//Sets a basic route

// Render the initial page with the number input form
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/draw", (req, res) => {
  let legOne = req.query.legOne
  let legTwo = req.query.legTwo
  res.render("draw", {legOne}, {legTwo});
});
app.post("/draw", (req, res) => {
  let legOne = req.body.legOne
  let legTwo = req.body.legTwo
  res.render("draw", {legOne}, {legTwo});
});
// Create express route binder for draw.hbs and get the data from the url as parameters
// that came from index.hbs



//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));
