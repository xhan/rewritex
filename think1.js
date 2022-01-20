// 高级套餐游戏
// ^https://think2-api\.hanamarulab\.com/api/.*/menu/2


var body = $response.body;
var obj = JSON.parse(body);

obj['user']["nickname"] = "PeterX";
obj['user']["life"] = [1,1,1];
obj["contents"].forEach((entry) => {
    entry["is_locked"] = false;    
});
body = JSON.stringify(obj);
console.log("Think2 body rewrited.");
$done(body);