// 
// https://api.enuma.cn/user/download
// rule: script-response-body
//       ^https://api\.enuma\.cn/user/download
//      

var body = $response.body;
var obj = JSON.parse(body);
/*
obj['account']["promotions"] = [{
				"code": "3DayUnlock_4_4_6",
				"expireMs": 165156874400,
				"status": 1
			}]
obj['isTrialActive'] = true
*/
obj['data']['account']['isSubscriptionActive'] = true
obj['data']['account']["subscriptionExpireDate"] = 1697001115000
obj['data']['account']['isTrialActive'] = true 
/*
obj['data']['account']['transactions'] = [{
				"original_purchase_date_ms": 1642669544000,
				"customDescription": "Trial",
				"duration": 3
			}, {
				"original_purchase_date_ms": 1646376315690,
				"customDescription": "庆祝一千万下载",
				"duration": 100
			}]
*/

body = JSON.stringify(obj);
console.log("TODOmath body rewrited.");
console.log(body)
$done(body);