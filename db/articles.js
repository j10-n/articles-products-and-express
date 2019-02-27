class DS_Articles {
  constructor() {
    this.storage = [];
    this.idNum = 1;
    this.mockArticleTitles();
  }
  mockArticleTitles() {
    this.storage.push({
      title: "HOLY COWS",
      author: "Berd",
      body: "MOO",
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
}
module.exports = new DS_Articles();
