// bilibili
let obj = JSON.parse($response.body)
for (let i = 0; i < obj.data.items.length; i++) {
  const element = obj.data.items[i]
  if (element.card_goto != 'av') {
    obj.data.items.splice(i, 1)
    i--
  }
}
$done({ body: JSON.stringify(obj) })
