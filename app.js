var http = require('http');
var fs = require('fs');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var file = fs.createWriteStream(__dirname + "/public/data.xml");


var request = http.get("http://vnexpress.net/rss/tin-moi-nhat.rss", function(response) {
    response.pipe(file);
    response.on("end", function() {
        console.log("xong");
        fs.readFile(__dirname + "/public/data.xml", function(err, result) {
            parser.parseString(result, function(err, data) {
                fs.writeFile(__dirname + "/public/data.json", JSON.stringify(data), function(err) {
                    if (err) return console.log(err);
                    console.log("The file was saved!");
                    var obj = JSON.parse(JSON.stringify(data));
                    console.log(obj.rss.channel[0].item.length);
                });
            });
        });
    })
});