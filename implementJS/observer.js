const obj = (() => {
  const observer = []
  const addObserver = (obj) => {
    observer.push(obj)
  }
  const broadcast = () => {
    for (let ob of observer) {
      if (ob.update) {
        ob.update()
      }
    }
  }
  return { addObserver, broadcast}
})()

let subA = {
    update: () => {
      console.log('updateSubA');
    }
  },
  subB = {
    update: () => {
      console.log('updateSubB');
    }
  };
obj.addObserver(subA)

obj.addObserver(subB)
obj.broadcast()
