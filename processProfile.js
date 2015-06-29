var cheerio = require('cheerio');
var exports = module.exports = {};

exports.profile = function($){
  var name = $('.user-card-name').text();
  name = name.replace(/\s+/g, " ").replace(/[^a-zA-Z ]/g, "");
  console.log(name);
}
