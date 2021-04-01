// this is for daily check

// notify info
let notifyInfo = {
  title: "联通签到",
  content: "",
};

// check action
function check() {
  const checkReq = {
    url: "https://act.10010.com/SigninApp/signin/daySign",
    method: "POST",
    headers: {
      Cookie: $prefs.valueForKey("cookie_10010"),
      "User-Agent": $prefs.valueForKey("user_agent_check"),
    },
  };
  $task.fetch(checkReq).then(
    (response) => {
      console.log("开始签到");
      const json = JSON.parse(response.body);
      let msg = "";
      if (json.status === "0000") {
        msg = "签到成功🎉" + "\n";
        console.log(msg);
      } else {
        msg = json.msg + "\n";
        console.log(msg);
      }
      notifyInfo.content += msg;
      checkInfo();
    },
    (reason) => {
      // reason.error
      console.log("签到失败:", reason.error);
      $notify("签到失败:", "", reason.error);
      $done();
    }
  );
}
// get check info action
function checkInfo() {
  const checkInfoReq = {
    url: "https://act.10010.com/SigninApp/signin/getIntegral",
    method: "POST",
    headers: {
      Cookie: $prefs.valueForKey("cookie_10010"),
    },
  };
  $task.fetch(checkInfoReq).then(
    (response) => {
      console.log("获取积分信息");
      const json = JSON.parse(response.body);
      let msg = "";
      if (json.status === "0000") {
        msg = "获取成功🎉，共计：" + json.data.integralTotal + "分" + "\n";
        console.log(msg);
      } else {
        msg = json.msg + "\n";
        console.log(msg);
      }
      notifyInfo.content += msg;
      $notify(notifyInfo.title, "", notifyInfo.content);
      $done();
    },
    (reason) => {
      // reason.error
      console.log("签到信息获取失败:", reason.error);
      $notify("签到信息获取失败:", "", reason.error);
      $done();
    }
  );
}

// start
check();
