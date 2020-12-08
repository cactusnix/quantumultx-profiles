// douban
var obj = JSON.parse($response.body)
obj.ad_info.show_ad_mark = false
$done({ body: JSON.stringify(obj) })
