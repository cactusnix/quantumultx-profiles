// this backend is for get prefs data
// eg: url: https://xxx.com?functionID=10010
const myStatus = "HTTP/1.1 200 OK";
const url = $request.url;

const functionID = url.split("?")[1].split("=")[1];
console.log(url);
console.log(functionID);
switch (functionID) {
  case "10010":
    $done({
      status: myStatus,
      headers: {},
      body: {
        code: 0,
        msg: "success",
        cookie: $prefs.valueForKey("cookie_10010"),
      },
    });
    break;

  default:
    $done({
      code: 0,
      msg: "default part",
    });
    break;
}
