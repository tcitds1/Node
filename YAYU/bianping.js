let dd = [1,2,3,[4,[5,6,[7,8,9]]]]
function fn(array) {
  let res = []
  for (let item of array) {
    if (item instanceof Array) {
      res = res.concat(fn(item))
    } else {
      res.push(item)
    }
  }
  return res
}

function cn(array) {
  while (array.some(item => { return Array.isArray(item)})) {
    array = [].concat(...array)
  }
  return array
}

function findIndex_(array, fn) {
  for (let i in array) {
    if (fn(array[i])) return i
  }
  return -1
}

let c = [1,2,3,4,5]
function fc(item) {
  return item === 4
}
console.log(c.findIndex(fc))
console.log(findIndex_(c, fc))

// 倒序逆序都有
function createIndexFinder(dir) {
  return function(array, predicate, context) {

    var length = array.length;
    var index = dir > 0 ? 0 : length - 1;

    for (; index >= 0 && index < length; index += dir) {
      if (predicate.call(context, array[index], index, array)) return index;
    }

    return -1;
  }
}

// var findIndex = createIndexFinder(1);
// var findLastIndex = createIndexFinder(-1);

// 二分法
function sortedIndex(array, value) {
  let high = array.length - 1
  let low = 0
  let mid
  while (low < high) {
    mid = Math.floor((high + low )/ 2)
    if (array[mid] > value) {
      high = mid
    } else {
      low = mid + 1
    }
  }
  return high
}
console.log(sortedIndex([10, 20, 30, 40, 50], 35)) // 3