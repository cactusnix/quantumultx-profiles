// bilibili
let obj = JSON.parse($response.body)
obj.data.items.splice(0, 1)
$done({ body: JSON.stringify(obj) })
