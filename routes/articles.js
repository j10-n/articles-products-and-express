var express = require("express");
var router = express.Router();
const DS_Articles = require("../db/articles");
router
  .get("/", function(req, res) {
    const articleTitle = DS_Articles.getAllArticles();
    res.render("articles", { articleTitle });
  })
  .get("/:title", (req, res) => {
    const selectedArticleTitle = req.params.title.replace(/%20/g, "");
    console.log("article title:", selectedArticleTitle);
    const article = DS_Articles.getArticleByTitle(selectedArticleTitle);
    res.render("newArticle", article);
    console.log("article:", article);
  })
  .post("/", function(req, res) {
    let newArticle = req.body;
    DS_Articles.createArticle(
      newArticle.title,
      newArticle.author,
      newArticle.body,
      newArticle.url
    );
    res.send("new article created");
  });

module.exports = router;
