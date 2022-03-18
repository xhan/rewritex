//

// ^https://m\.ximalaya\.com/qqx/swkdBook/queryUnitList
// 书本列表激活

var body = $response.body;
var obj = JSON.parse(body);


obj.data.unitList.forEach((entry) => {
    entry["status"] = "1";    
});
body = JSON.stringify(obj);
// console.log("Think2 body rewrited.");
$done(body);