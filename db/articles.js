class DS_MockArticles {
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
    console.log("title");
    return this.storage.slice();
  }
  getArticleByTitle(title) {
    let result;
    console.log("title", title);
  }
}
module.exports = new DS_MockArticles();
