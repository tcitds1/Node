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

function debounce(fn, wait) {
  let timer = ''
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, wait)
  }
}
