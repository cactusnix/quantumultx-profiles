const url = $request.url;
const headers = $request.headers;

// this is for 10010 中国联通
if (url.indexOf("10010") > -1) {
  // simplify cookie
  const cookie = headers["Cookie"].split("; ");
  const ecsToken = cookie.find((v) => v.indexOf("ecs_token") > -1) + ";";
  const ecsAcc = cookie.find((v) => v.indexOf("ecs_acc") > -1) + ";";
  // validator the cookie
  // first check weather cookie is right
  if (ecsToken.indexOf("undefined") > -1 || ecsAcc.indexOf("undefined") > -1) {
    $notify("中国联通Cookie获取失败（登录并打开联通App）😬", "", "");
    $done();
  } else {
    if ($prefs.valueForKey("ecs_acc") && $prefs.valueForKey("ecs_token")) {
      // only validator because ecs_token every time is different
      if ($prefs.valueForKey("ecs_acc") != ecsAcc) {
        $prefs.setValueForKey(ecsToken, "ecs_token");
        $prefs.setValueForKey(ecsAcc, "ecs_acc");
        $notify("中国联通ecs_acc更新成功🎉", "", "");
        $done();
      } else {
        $done();
      }
    } else {
      $prefs.setValueForKey(ecsToken, "ecs_token");
      $prefs.setValueForKey(ecsAcc, "ecs_acc");
      $prefs.setValueForKey(
        "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148unicom",
        "user_agent_check"
      );
      $notify("中国联通Cookie首次写入成功🎉", "", "");
      $done();
    }
  }
}
