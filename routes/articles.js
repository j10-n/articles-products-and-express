var express = require("express");
var router = express.Router();
const DS_MockArticles = require("../db/articles");

router.get("/", function(req, res) {
  const articleTitle = DS_MockArticles.getAllArticles();
  res.render("articles", { articleTitle });
});

module.exports = router;
