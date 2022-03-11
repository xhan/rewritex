// GET https://app.buburead.com/api/v1/user
// rule: script-response-body
//      ^https://app\.buburead\.com/api/v1/user
// 步步阅读

var body = $response.body;
var obj = JSON.parse(body);

obj.data.vip = 1
obj.data.vip_expire_time = "2023-08-17T00:00:00+08:00"
obj.data.vip_expire_duration = 8640000


body = JSON.stringify(obj);
// console.log("TODOmath body rewrited.");
$done(body);