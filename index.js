var express = require('express');
var fs = require('fs');





var app = express();

app.use('/public', express.static(`${__dirname}/public`));

app.get("/", function(req, res) {
    res.send("hehe");
});
app.get("/:abc", function(req, res) {
    res.send(`
    
    <h1>${req.params.abc}</h1>`);
});
app.set('view engine', 'jade');
app.get('/x/test', function(req, res) {
    res.sendfile('public/content.html', { root: __dirname })
});
app.listen(81);