//

// ^https://m\.ximalaya\.com/qqx/swkdBook/queryBookList
// 书本单元激活

var body = $response.body;
var obj = JSON.parse(body);


obj.data.bookList.forEach((entry) => {
    entry["tryListening"] = true;    
});
body = JSON.stringify(obj);
// console.log("Think2 body rewrited.");
$done(body);