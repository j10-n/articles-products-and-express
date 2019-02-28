class DS_Articles {
  constructor() {
    this.storage = [];
    this.idNum = 1;
    this.mockArticleTitles();
    this.successful = false;
  }
  mockArticleTitles() {
    this.storage.push({
      title: "HOLY COWS",
      author: "Khau the Asian Cow",
      body: "MOO MOO",
      urlTitle: "Holy Cows"
    });
  }
  getAllArticles() {
    return this.storage.slice();
  }
  getArticleByTitle(title) {
    let result;
    this.storage.forEach(article => {
      if (article.title === title) {
        result = article;
      }
    });
    console.log("result:", result);
    return result;
  }
  createArticle(title, author, body, url) {
    this.storage.push({
      title,
      author,
      body,
      url
    });
    this.idNum;
  }
  editArticle(title, updatedTitle, author, body, url) {
    this.successful = false;
    this.storage.forEach(article => {
      if (article.title === title) {
        article.title = updatedTitle;
        article.author = author;
        article.body = body;
        article.url = url;
        console.log("djsaijdiasjdioajsijs");
        this.successful = true;
        return this.successful;
      } else {
        console.log("djs213214213e12s");

        return this.successful;
      }
    });
  }
  deleteArticle(title) {
    this.storage.slice().forEach((article, idx) => {
      if (article.title === title) {
        this.storage.splice(idx, 1);
      }
    });
  }
}
module.exports = new DS_Articles();
