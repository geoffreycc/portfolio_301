
function ArticleObj(art) {
  this.title = art.title;
  this.imgName = art.imgName;
  this.imgPath = 'images/' + art.imgName + '.jpg';
  this.about = art.about;
  this.link = art.link;
  this.publishedOn = art.publishedOn;
  this.category = art.category;
  this.author = art.author;
  ArticleObj.all.push(this);
};

ArticleObj.all = []; //was articleContent?

ArticleObj.prototype.contentDisplay = function() {
  var templateIndex = $('#blogArticle').html();
  var template = Handlebars.compile(templateIndex);
  return template(this);
};

ArticleObj.prototype.setDates = function() {
  //Create method to make new dates
};

ArticleObj.checkLocal = function() {
  if (localStorage.rawData) {
    rawData = JSON.parse(localStorage.rawData);
    console.log('rawData from the localStorage is ' + rawData);
    ArticleObj.loadArticles(rawData);
  } else {
    ArticleObj.getRawData();
    console.log('rawData gotten from .json file');
  }
};

ArticleObj.loadArticles = function(rawData) {
  rawData.map(function(ele) {
    console.log(ele);
    return new ArticleObj(ele);
  });
};

ArticleObj.getRawData = function() {
  $.getJSON('data/article.json', function(rawData) {
    ArticleObj.loadArticles(rawData);
    localStorage.rawData = JSON.stringify(rawData);
  });
};

// articleDisplay.getFromServer = function () {
//   //use AJAX to get content form json file
// };
//
// articleDisplay.checkLatest = function() {
//   //getAjax head deal?
//   //Check to see if local storage is up to date.
// };

// Create a method to sort articles by date so that the most recent is presented first.

$(document).ready(function() {

  ArticleObj.checkLocal();

  ArticleObj.all.forEach(function(ar) {
    $('#projects').append(ar.contentDisplay());
  });
});
