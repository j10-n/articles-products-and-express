var express = require("express");
var hbs = require("express-handlebars");
var app = express();
const PORT = 8080;
const bodyParser = require("body-parser");
const articles = require("./routes/articles");

app.use(bodyParser.urlencoded({ extended: true }));
app.engine(
  "hbs",
  hbs({
    defaultLayout: "main",
    extname: ".hbs"
  })
);
app.set("view engine", "hbs");

app.use("/articles", articles);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
