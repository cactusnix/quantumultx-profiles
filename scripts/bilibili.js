// bilibili
let obj = JSON.parse($response.body)
if (obj.data.items[0].banner_item) {
  obj.data.items.splice(0, 1)
}
$done({ body: JSON.stringify(obj) })
