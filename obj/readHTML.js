var jsdom = require("jsdom/lib/old-api.js");

jsdom.env(
    "http://video.vnexpress.net/tin-tuc/xa-hoi/treo-cay-co-thu-lay-nam-cho-thu-tien-trieu-moi-ngay-3607414.html", ["http://code.jquery.com/jquery.js"],
    function(err, window) {
        console.log("there have been", window.$("#left_calculator").html(), "io.js releases!");
    }
);