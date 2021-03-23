const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const port = 4040;

const handlebarsInstance = exphbs.create({
  extname: ".html",
  defaultLayout: "main",
});

app.engine("html", handlebarsInstance.engine);
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
