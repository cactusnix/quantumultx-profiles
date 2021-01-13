// zhihu topstory
let obj = JSON.parse($response.body)
for (let i = 0; i < obj.advertises.length; i++) {
  const index = obj.statuses.findIndex(v => {
    v.id === obj.advertises[i]
  })
  obj.statuses.splice(index, 1)
}
$done({ body: JSON.stringify(obj) })
