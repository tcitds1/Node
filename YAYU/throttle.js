function throttle (fn, await) {
  let previous = 0
  return function () {
    let now = +new Date()
    if (now > await + previous) {
      fn.apply(this, arguments)
      now = previous
    }
  }
}