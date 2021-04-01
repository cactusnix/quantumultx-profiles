// this is for daily check

// notify info
let notifyInfo = {
  title: "联通签到",
  content: "",
};

// check action
async function check() {
  const checkReq = {
    url: "https://act.10010.com/SigninApp/signin/daySign",
    method: "POST",
    headers: {
      Cookie: $prefs.valueForKey("cookie_100010"),
      "User-Agent": $prefs.valueForKey("user_agent_check"),
    },
  };
  const { resp, err } = await $task.fetch(checkInfoReq);
  if (err) {
    console.log("签到失败:", err.error);
    $done();
  }
  if (resp) {
    const msg = "签到:" + resp.body.msg + "\n";
    console.log(msg);
    notifyInfo.content += msg;
  }
}
// get check info action
async function checkInfo() {
  const checkInfoReq = {
    url: "https://act.10010.com/SigninApp/signin/getIntegral",
    method: "POST",
    headers: {
      Cookie: $prefs.valueForKey("cookie_100010"),
    },
  };
  const { resp, err } = await $task.fetch(checkInfoReq);
  if (err) {
    console.log("签到信息获取失败:", err.error);
    $done();
  }
  if (resp) {
    const msg = "签到积分:" + resp.body.data.integralTotal + "\n";
    console.log(msg);
    notifyInfo.content += msg;
  }
}

await check();
await checkInfo();
$notify(notifyInfo.title, "", notifyInfo.content);
