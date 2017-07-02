/**
 trả về string json từ một đường dẫn file XML
 */
module.exports = function(LinkFileXML, callback) {
    /**
 khai báo sử dụng module                               
fs - file system để quản lý file
 */
    var fs = require('fs');
    /**
     
     sủ dụng phương thức readFile không đồng bộ của fs để đọc file
      
      tham số 1: đường dẫn file cần đọc
        tham số 2: hàm callback với 2 tham số là lỗi và kết quả trả về sau khi đọc xong
     */
    fs.readFile(LinkFileXML, function(err, result) {

        var xml2js = require('xml2js'); // khai báo sử dụng module   xml2js để quản lý xml       
        var parser = new xml2js.Parser(); // sử dụng đối tượng Parser của module xml2js
        /**
          Phương thức parseString của đối tượng Parser chuyển từ kết quả sau khi đọc file không đồng bộ thành chuỗi string
          tham số 1 là kết quả trả về sau khi đọc file
          tham số 2 hàm callback với 2 tham số là lỗi và kết quả trả về sau khi đọc xong
         */
        parser.parseString(result, function(err, data) {
            callback(JSON.stringify(data)) // hàm call back vơi tham số trả về chuỗi json

            /**
              phương thức writeFile của fs ghi file không đồng bộ

              tham số 1 là đường dẫn file cần ghi
              tham số 2 là dữ liệu cần ghi
              tham số 3 làm ham callback trả về kết quả sau khi ghi xong

              JSON.stringify(data) chuyển dữ liệu sang dạng json
             */

            // fs.writeFile(__dirname + "/public/data.json", JSON.stringify(data), function(err) {
            //     if (err) return console.log(err);
            //     console.log("The file was saved!");
            //     var obj = JSON.parse(JSON.stringify(data)); // chuyển từ json sang đối tượng
            //     console.log(obj.rss.channel[0].item.length);
            // });
        });
    });
}