class DS_Articles {
  constructor() {
    this.storage = [];
    this.idNum = 1;
    // this.mockArticleTitles();
    this.successful = false;
  }
  // mockArticleTitles() {
  //   this.storage.push({
  //     title: "HOLY COWS",
  //     author: "Khau the Asian Cow",
  //     body: "MOO MOO",
  //     url: "HOLY%20COWS"
  //   });
  // }
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
  createArticle(name, description, quantity) {
    this.storage.push({
      name,
      description,
      quantity
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
        this.successful = true;
        return this.successful;
      } else {
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
