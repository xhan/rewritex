// 
// https://api.enuma.cn/user/download
// rule: script-response-body
//       ^https://api\.enuma\.cn/user/download
//      

var body = $response.body;


/*
var obj = JSON.parse(body);
obj['data']['account']['isSubscriptionActive'] = true
obj['data']['account']["subscriptionExpireDate"] = 1697001115000
obj['data']['account']['isTrialActive'] = true 

body = JSON.stringify(obj);
*/
p = body.replace(/subscriptionExpireDate":\d+/,"subscriptionExpireDate\":1697001115000")
p = p.replace(/isSubscriptionActive":false/,"isSubscriptionActive\":true")
p = p.replace(/isTrialActive":false/,"isTrialActive\":true")


console.log("TODOmath body rewrited.");
console.log(p)
$done(p);