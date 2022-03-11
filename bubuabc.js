// get https://www.bubuabc.com/phonics/course/path/list/v3/
// rule: script-response-body
//      ^https://www\.bubuabc\.com/phonics/course/path/list/v3
// 步步拼读

var body = $response.body;
var obj = JSON.parse(body);


for (lesson of obj.data.lessons){
    lesson.lockFlg = 0
    lesson.lessonState = 2
}


body = JSON.stringify(obj);
// console.log("TODOmath body rewrited.");
$done(body);