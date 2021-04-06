// this backend is for get prefs data
// eg: url: https://xxx.com?functionID=10010
const url = $request.url;

const functionID = url.split("?")[1].split("=")[1];
console.log(url);
console.log(functionID);
const myStatus = "HTTP/1.1 200 OK";
const myHeaders = { Connection: "Close" };
switch (functionID) {
  case "10010":
    $done({
      status: myStatus,
      headers: myHeaders,
      body: {
        code: 0,
        msg: "success",
        cookie: $prefs.valueForKey("cookie_10010"),
      },
    });
    console.log({
      status: myStatus,
      headers: myHeaders,
      body: {
        code: 0,
        msg: "success",
        cookie: $prefs.valueForKey("cookie_10010"),
      },
    });
    break;

  default:
    const myResponse = {
      status: myStatus,
      headers: myHeaders,
      body: myData + JSON.stringify($request.headers),
    };

    $done(myResponse);
    break;
}
