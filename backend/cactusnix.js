// this backend is for get prefs data
// eg: url: https://xxx.com?functionID="10010"
const url = $request.url;

const functionID = url.split("?")[1].split("=")[1];

if (functionID === "10010") {
  $done({
    cookie: $prefs.valueForKey("cookie_10010"),
  });
}
