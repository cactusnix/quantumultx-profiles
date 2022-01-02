const url = $request.url;
// wechat 公众号
if (url.includes("mp.weixin.qq.com/mp")) {
  let obj = JSON.parse($response.body);
  obj.advertisement_num = 0;
  obj.advertisement_info = [];
  delete obj.appid;
  $done({ body: JSON.stringify(obj) });
}
