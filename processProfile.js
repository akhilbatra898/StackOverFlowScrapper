var request = require('request');
var cheerio = require('cheerio');
var exports = module.exports = {};


exports.profile = function($){
  var name = $('.user-card-name').clone().find('span').remove().end().text().trim();
  //name = name.trim();//replace(/\s+/g, " ").trim();
  var description = $('.bio').text();
  var peopleReached = $('.people-helped span').text().trim();
  // (temp) have to change it's format
  peopleReached = peopleReached.replace(/[~]/, "");
  var location_1 = $('.icon-location').parent().text().trim();
  var memberFor = new Date($('.icon-history').siblings().attr('title'));
  var profileViews = parseInt($('.icon-eye').parent().text().replace(/[^0-9]/g,""));
  var reputation = parseInt($('.reputation span').parent().text().replace(/[^0-9]/g,""));
  var communities = getCommunities($('.additional-links .favicon-stackexchange').parent().attr('href'));

  console.log("name:"+name);
  console.log("Description:"+description);
  console.log("People Reached:"+peopleReached);
  console.log("Location:"+location_1);
  console.log("Member for:"+memberFor);
  console.log("Profile Views:"+profileViews);
  console.log("Reputation:"+reputation);
  console.log(communities);
}


var getCommunities = function(url){
   url = url;
   //console.log(url);
   //var communities = [];
   request(url+"?tab=accounts", function(error, response, html){
      console.log(url+"hello");
      //if(error) throw error;
      //var $ = cheerio.load(html);
      /*$('.account-container').each(function(i, curr){
         var community = {}
	 var name = $(this).find('h2 a').text().trim();
	 console.log("community:"+name);
	 var reputation = parseInt($(this).find('.account-number').eq(0).text().replace(/[^0-9]/g,""));
	 var badges = {"gold":0,"silver":0,"bronze":0};
	 var badge1 = $(this).find('.badge1').next().text();
	 var badge2 = $(this).find('.badge2').next().text();
	 var badge3 = $(this).find('.badge3').next().text();
	 if(badge1){ badges["gold"] = parseInt(badge1);}
	 if(badge2){ badges["silver"] = parseInt(badge2);}
	 if(badge3){ badges["bronze"] = parseInt(badge3);}
	 community["name"] = name;
	 community["reputation"] = reputation;
	 community["badges"] = badges;
	 communities.push(community);
	 console.log(communities);
	 });*/
   });
   //return communities;
}
