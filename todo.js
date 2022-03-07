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
obj['account']["subscriptionExpireDate"] = 1697001115690 ;
obj['account']['isTrialActive'] = true ;
obj['account']['transactions'] = [{
				"original_purchase_date_ms": 1642669544000,
				"customDescription": "Trial",
				"duration": 3
			}, {
				"original_purchase_date_ms": 1646376315690,
				"customDescription": "庆祝一千万下载",
				"duration": 7
			}]


body = JSON.stringify(obj);
console.log("Think2 body rewrited.");
$done(body);