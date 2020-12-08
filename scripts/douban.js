// douban
const url = $request.url
if (url.indexOf('splash_preload') > -1) {
  var obj = JSON.parse($response.body)
  obj.ads = []
  $done({ body: JSON.stringify(obj) })  
}
if (url.indexOf('splash_show') > -1) {
  var obj = JSON.parse($response.body)
  obj.ad_info = {}
  $done({ body: JSON.stringify(obj) })  
}