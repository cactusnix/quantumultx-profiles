const url = $request.url;
const headers = $request.headers;

// this is for 10010 中国联通
if (url.indexOf("10010") > -1) {
  // simplify cookie
  const cookie = headers["Cookie"].split("; ");
  const cookieValue =
    cookie.find((v) => v.indexOf("ecs_token") > -1) +
    ";" +
    cookie.find((v) => v.indexOf("ecs_acc") > -1) +
    ";";
  // validator the cookie
  if (cookieValue.indexOf("undefined") > -1) {
    $notify("中国联通Cookie获取失败（登录并打开联通App）😬", "", "");
    $done();
  } else {
    if ($prefs.valueForKey("cookie_100010")) {
      if ($prefs.valueForKey("cookie_100010") != cookieValue) {
        $prefs.setValueForKey(cookieValue, "cookie_100010");
        $notify("中国联通Cookie更新成功🎉", "", "");
        $done();
      } else {
        $done();
      }
    } else {
      $prefs.setValueForKey(cookieValue, "cookie_100010");
      $prefs.setValueForKey(
        "Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148unicom",
        "user_agent_check"
      );
      $notify("中国联通Cookie写入成功🎉", "", "");
      $done();
    }
  }
}
