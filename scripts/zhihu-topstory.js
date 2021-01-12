// zhihu topstory
let obj = JSON.parse($response.body)
for (let i = 0; i < obj.data.length; i++) {
  if (!obj.data[i].offset) {
    obj.data.splice(i, 1)
  }
}
$done({ body: JSON.stringify(obj) })
