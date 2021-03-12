// bilibili
let obj = JSON.parse($response.body)
obj.data.advertParam.skipTime = 1000
obj.data.advertParam.showSkipBtn = 0
$done({ body: JSON.stringify(obj) })
