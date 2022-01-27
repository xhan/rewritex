// 
// https://api.enuma.cn/user/download


var body = $response.body;
var obj = JSON.parse(body);

obj['account']["promotions"] = [{
				"code": "3DayUnlock_4_4_6",
				"expireMs": 165156874400,
				"status": 1
			}]
obj['isTrialActive'] = true

body = JSON.stringify(obj);
console.log("Think2 body rewrited.");
$done(body);