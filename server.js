var findUrl = require('./findUrl.js');
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/letshire');

var page = 1;
var pageLimit = 1;//13626;

function mainLoop(){
  var url = "http://stackoverflow.com/users?page="+page+"&tab=reputation&filter=all";
  console.log("Page: " + page);
  findUrl.user(url);
  page += 1;
  if(page <= pageLimit){
    setTimeout(mainLoop, 40000);
  }
};

mainLoop();
