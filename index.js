const express = require("express");
const exphbs = require("express-handlebars");

const jokeApi = require("./lib/jokeApi");

const app = express();
const port = 4040;

const handlebarsInstance = exphbs.create({
  extname: ".html",
  defaultLayout: "main",
});

app.engine("html", handlebarsInstance.engine);
app.set("view engine", "html");

app.get("/", (req, res) => {
  // use the jokeApi required above to call a function that will return the result of the API call.
  res.render("home", {});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
