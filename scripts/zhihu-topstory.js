// zhihu topstory
let obj = JSON.parse($response.body)
let indexList = []
for (let i = 0; i < obj.data.length; i++) {
  if (!obj.data[i].offset) {
    indexList.push(i)
  }
}
for (let i = 0; i < indexList.length; i++) {
  obj.data.splice(indexList[i], 1)
}
console.log(obj)
$done({ body: JSON.stringify(obj) })
