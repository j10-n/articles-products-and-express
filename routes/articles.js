var express = require("express");
var router = express.Router();
const DS_Articles = require("../db/articles");

const knex = require("../database");

router
  .get("/", function(req, res) {
    // const articleTitle = DS_Articles.getAllArticles();
    // res.render("articles", { articleTitle })
    knex
      .select()
      .from("articles_table")
      .then(articles_table => {
        res.render("articles", { articles_table });
      });
  })
  .get("/add", function(req, res) {
    knex
      .select()
      .from("articles_table")
      .then(articles_table => {
        res.render("addArticle");
      });
  })
  .get("/:title", (req, res) => {
    const selectedArticleId = req.params.title;
    console.log("article title:", selectedArticleId);
    const article = DS_Articles.getArticleByTitle(selectedArticleId);
    let articleId = Number(req.param.id);
    knex
      .select()
      .from("articles_table")
      .where("id", selectedArticleId)
      .then(articles_table => {
        let obj = articles_table[0];
        res.render("newArticle", obj);
        console.log("asdsadsadas", obj);
      });
    // console.log("article:", article);
  })

  .get("/:title/edit", function(req, res) {
    const title = req.body.title;
    const article = DS_Articles.getArticleByTitle(title);
    res.render("editArticles", article);
  })

  .post("/", function(req, res) {
    let newArticle = req.body;
    knex("articles_table")
      .insert({
        name: newArticle.name,
        description: newArticle.description,
        quantity: newArticle.quantity
      })
      .then(articles_table => {
        res.send("new article created");
      });
    console.log(newArticle);
  })

  .post("/edit", function(req, res, push) {
    let title = req.body.title;
    let updatedTitle = req.body.updatedTitle;
    let author = req.body.author;
    let body = req.body.body;
    let url = req.body.url;
    DS_Articles.editArticle(title, updatedTitle, author, body, url);
    res.redirect("/articles/" + url);
  })

  // put for postman
  .put("/:title", (req, res) => {
    console.log("successful = ", DS_Articles.successful);
    let title = req.body.title;
    let updatedTitle = req.body.updatedTitle;
    console.log("newarticle", updatedTitle);
    let author = req.body.author;
    let body = req.body.body;
    let url = req.body.url;
    DS_Articles.editArticle(title, updatedTitle, author, body, url);

    if (DS_Articles.successful === true) {
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
