const jikeURL = /^https:\/\/redirect\.ruguoapp\.com\/\?redirect=(.*)$/;

const url = $request.url;
let redirectURL = "";
switch (url) {
  case url.includes("ruguoapp"):
    redirectURL = decodeURIComponent(jikeURL.exec(url))[1];
    break;

  default:
    redirectURL = url;
    break;
}
$done({
  status: "HTTP/1.1 302 Temporary Redirect",
  headers: {
    Location: redirectURL,
  },
});
