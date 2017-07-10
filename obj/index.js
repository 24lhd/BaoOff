var GetDataToFile = require('./GetDataToFile.js');
var FromFileXmlToJson = require('./FromFileXmlToJson.js');
var fs = require('fs');


var VnExpress = require("../news/VnExpress.js");
var Bao24h = require("../news/Bao24h.js");
var TuoiTre = require("../news/TuoiTre.js");
var arrNews = [VnExpress, TuoiTre, Bao24h];

var testFolder = '../data_json/';





arrNews.forEach(function(element) {
    console.log(element.IDNews);
    element.arrRss.forEach(function(rss) {

        // console.log(rss.IDCategory);
        // console.log(rss.LinkCategory);

        var linkURL = rss.LinkCategory;
        var linkFile = '../data_xml/' + element.IDNews + "_" + rss.IDCategory + '.xml';
        var callBackFromFileXmlToJson = (json) => {
            // console.log(json);
            // json = json + json;
       
            fs.writeFile('../data_json/' + element.IDNews + "_" + rss.IDCategory + '.json', json, function(err) {
                if (err) return console.log(err);
            });
        }
        var callBackGetDataToFile = () => {
            FromFileXmlToJson(linkFile, callBackFromFileXmlToJson);
        }
        GetDataToFile(linkURL, linkFile, callBackGetDataToFile);
    });


});


fs.readdir(testFolder, (err, files) => {
        files.forEach(file => {
            console.log(file);
        });
    })
    // console.log(json);
    // console.log("done");
    // var fs = require('fs');
    // fs.writeFile("../news/data.txt", json, function(err) {
    //     if (err) return console.log(err);
    // });
