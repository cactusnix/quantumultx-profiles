// this backend is for get prefs data
// eg: url: https://xxx.com?functionID=10010
const url = $request.url;

const functionID = url.split("?")[1].split("=")[1];

switch (functionID) {
  case "10010":
    $done({
      code: 0,
      msg: "success",
      cookie: $prefs.valueForKey("cookie_10010"),
    });
    break;

  default:
    $done({
      code: 0,
      msg: "default part",
    });
    break;
}
