/*
    module chìa ra một phương thức thực hiện đọc xml từ link rss rồi ghi vào một file
    tham số 1 : LinkURL  dữ liệu
    tham số 2 : đường dẫn file cần ghi dữ liệu từ LinkURL
    tham số 3: hàm callback trả về khi đã ghi xong dữ liệu tơi AddressFile
*/

module.exports = function(LinkURL, AddressFile, callback) {
    /**
     khai báo sử dụng 2 module 
     
     http - sử dụng các phương thức http để lấy dữ liệu
     fs - file system để quản lý file
     */

    var http = require('http');
    var fs = require('fs');
    /*
    tạo một luồng ghi với tham số là đường dẫn của file cần ghi
     */
    var file = fs.createWriteStream(AddressFile);
    /*
        sử dụng phương thức GET của http với tham số 

        1 là đường dẫn url
        2 là hàm callback với tham số là response của http
     */
    http.get(LinkURL, function(response) {
        response.pipe(file); // ghi vào luồng file đã khỏi tạo ở trên
        response.on("end", function() { // lắng nghe sự kiện khi kết thúc response
            // gọi hàm callback của phương thức và trả về vs 
            //tham số là đường dẫn link file đã ghi xml từ một trang đã đọc được
            callback();
        })
    });
}