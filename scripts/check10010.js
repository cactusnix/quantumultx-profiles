// this is for daily check
const checkReq = {
  url: "https://act.10010.com/SigninApp/signin/daySign",
  method: "POST",
  headers: {
    Cookie: $prefs.valueForKey("cookie_100010"),
    "User-Agent": $prefs.valueForKey("user_agent_check"),
  },
};
const checkInfoReq = {
  url: "https://act.10010.com/SigninApp/signin/getIntegral",
  method: "POST",
  headers: {
    Cookie: $prefs.valueForKey("cookie_100010"),
  },
};

$task.fetch(checkReq).then(
  (response) => {
    // response.statusCode, response.headers, response.body
    console.log(response.body);
    $notify("Title", "Subtitle", response.body); // Success!
    $done();
  },
  (reason) => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
    $done();
  }
);

$task.fetch(checkInfoReq).then(
  (response) => {
    // response.statusCode, response.headers, response.body
    console.log(response.body);
    $notify("Title", "Subtitle", response.body); // Success!
    $done();
  },
  (reason) => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
    $done();
  }
);
