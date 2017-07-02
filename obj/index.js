var GetDataToFile = require('./GetDataToFile.js');
var FromFileXmlToJson = require('./FromFileXmlToJson.js');


var linkURL = 'http://vnexpress.net/rss/thoi-su.rss'
var linkFile = 'data.xml'

var callBackFromFileXmlToJson = (json) => {
    console.log(json);
}

var callBackGetDataToFile = () => {
    FromFileXmlToJson(linkFile, callBackFromFileXmlToJson);
}

GetDataToFile(linkURL, linkFile, callBackGetDataToFile);