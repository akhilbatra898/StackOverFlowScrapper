var request = require('sync-request');
var cheerio = require('cheerio');
var exports = module.exports = {};
var processProfile = require('./processProfile.js');
var userUrls = [];

exports.user = function(url){
  html = request("GET",url).getBody();
/*	
  request(url, function(error, response, html){
    if(error) throw error;*/
    var $ = cheerio.load(html);
    var users = $('#user-browser .user-details a');
    getUserUrl(users, userProfile);
}

var getUserUrl = function(users, callback){
  for(var i = 0; i < users.length; i++){
    userUrls.push("http://stackoverflow.com" + users[i].attribs.href);
  }
  callback();
}

var userProfile = function(){
  html = request("GET",userUrls[0]).getBody();
/*	
  request(userUrls[0], function(error, response, html){
    if(error) throw error;*/
    var $ = cheerio.load(html);
    processProfile.profile($);
  userUrls.shift();
  if(typeof userUrls != undefined && userUrls.length > 0){
    setTimeout(userProfile, 1000);
  }
}
