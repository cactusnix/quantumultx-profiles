// this is for daily check
// check action
function check() {
  return new Promise((resolve, reject) => {
    const checkReq = {
      url: "https://act.10010.com/SigninApp/signin/daySign",
      method: "POST",
      headers: {
        Cookie: $prefs.valueForKey("cookie_100010"),
        "User-Agent": $prefs.valueForKey("user_agent_check"),
      },
    };
    $task.fetch(checkReq).then(
      (response) => {
        console.log("签到结果:", response.body.msg);
      },
      (reason) => {
        // reason.error
        console.log("签到Reason:", reason.error);
      }
    );
  });
}
// get check info action
function checkInfo() {
  return new Promise((resolve, reject) => {
    const checkInfoReq = {
      url: "https://act.10010.com/SigninApp/signin/getIntegral",
      method: "POST",
      headers: {
        Cookie: $prefs.valueForKey("cookie_100010"),
      },
    };
    $task.fetch(checkInfoReq).then(
      (response) => {
        // response.statusCode, response.headers, response.body
        console.log("目前积分", response.body.data.integralTotal);
      },
      (reason) => {
        // reason.error
        console.log("签到信息Reason:", reason.error);
      }
    );
  });
}

await check();
await checkInfo();
