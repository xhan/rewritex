//https://gameserver-live2.thefoos.com/parse/functions/CheckSubscriptionStatus
//
// 
var body = $response.body;
var obj = JSON.parse(body);

obj.result.isComped = true;
obj.result.isExpiredReceipt = false;
obj.result.isInTrial = true;

body = JSON.stringify(obj);
$done(body);