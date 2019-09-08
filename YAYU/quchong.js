var array = [1,2,3,2,3,2,1, 1, '1', '1'];

function unique(array) {
  let result = []
  let mark
  for (let i = 0; i<array.length; i++) {
    mark = true
    for (let j = 0; j<result.length; j++) {
      if (array[i] === result[j]) {
        mark = false
        break
      }
    }
    if (mark) {
      result.push(array[i])
    }
  }
  return result
}

function unique(array) {
  let res = []
  for (let i = 0; i<array.length; i++) {
    if (res.indexOf(array[i]) === -1) {
      res.push(array[i])
    }
  }
  return res
}
// 排序数组去重 
function unique(array) {
  let res = []
  let seem
  for (let i = 0; i <array.length; i++) {
    if (!i || seem!== array[i]) {
      res.push(array[i])
    }
    seem = array[i]
  }
  return res
}

var array = [1,2,3,3,3,4,5,6,7,8,8,8];
console.log(unique(array))