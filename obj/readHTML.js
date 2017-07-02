var jsdom = require("jsdom/lib/old-api.js");

jsdom.env(
    "http://video.vnexpress.net/tin-tuc/phap-luat/luat-su-phuong-nga-ke-chuyen-bi-than-chu-tham-van-nguoc-3607231.html", ["http://code.jquery.com/jquery.js"],
    function(err, window) {
        // var content = window.$("#left_calculator").html();
        try {
            var content = window.$("script").text().split("VideoVNE.config_play")[1].split("};")[0];
            content = "config_play " + content + "};";
            console.log(content)
            var content = window.$("script").text().split("s720: '")[1].split("',")[0];
            console.log(content)
            var content = window.$("script").text().split("s480: '")[1].split("',")[0];
            console.log(content)
        } catch (error) {
            var content = window.$("script").text().split("s480: '")[1].split("',")[0];
            console.log(content)
        }



        // if (content == undefined) {
        //     content = window.$("#media-video").attr("src");
        //     console.log(content)
        // }

    }
);