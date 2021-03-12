// bilibili
let obj = JSON.parse($response.body)
obj.data.advertParam.skipTime = 0
$done({ body: JSON.stringify(obj) })
