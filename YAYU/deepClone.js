let c = function () {
  console.log('1')
}
let d = function () {
  console.log('2')
}
let e = [
  c, 1, {
  f: d
  }
]
console.dir(JSON.parse(JSON.stringify(e)))

function clone1(obj) {
  if (obj === null || obj !== 'object') {
    return obj
  }
  let newobj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    newobj[key] = clone1(obj[key])
  }
  return newobj
}