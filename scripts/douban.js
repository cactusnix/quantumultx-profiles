// douban
var obj = JSON.parse($response.body)
obj.ads = []
$done({ body: JSON.stringify(obj) })
