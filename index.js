var express = require('express');
var fs = require('fs');
console.log(fs.readFileSync('http://vnexpress.net/rss/tin-moi-nhat.rss', { encoding: 'utf-8' }));



var externalURL = 'http://vnexpress.net/rss/tin-moi-nhat.rss';

console.log(fs.readFile(externalURL, function(err, data) {
    var fileData = new Buffer(data).toString('utf-8');
    console.log(data);
}));

var app = express();

app.use('/public', express.static(`${__dirname}/public`));

app.get("/", function(req, res) {
    res.send("hehe");
});
app.get("/:abc", function(req, res) {
    res.send(`
    
    <h1>${req.params.abc}</h1>`);
});

app.listen(81);