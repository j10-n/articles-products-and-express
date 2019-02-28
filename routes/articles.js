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
  })
  .put("/:title", (req, res) => {
    console.log("successful = ", DS_Articles.successful);
    // let newArticle = req.body;
    let title = req.body.title;
    let updatedTitle = req.body.updatedTitle;
    console.log("newarticle", updatedTitle);
    let author = req.body.author;
    let body = req.body.body;
    let url = req.body.url;
    DS_Articles.editArticle(title, updatedTitle, author, body, url);

    if (DS_Articles.successful === true) {
      //   res.redirect("/articles/:title");
      res.send("You have successfully changed " + updatedTitle);
    } else {
      //DS_Articles.successful === false;
      res.send("Change has been unsuccessful");
    }
  })
  .delete("/", (req, res) => {
    let title = req.body.title;
    console.log(title);
    DS_Articles.deleteArticle(title);
    res.send("Deleted " + title);
  });

module.exports = router;
