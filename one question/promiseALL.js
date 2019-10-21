let p = ()  => new Promise(resolve => {
  setTimeout(resolve, 1000, 5)
})
p().then(result => {
  console.log(result)
})