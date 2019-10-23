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

const Model = (() => {
  const list = {}
  const subScribe = (type, fn) => {
    if (!list[type]) {
      list[type] = []
    }
    list[type].push(fn)
  }
  const publish = (type, arguments) => {
    for (let fn of list[type]) {
      fn(arguments)
    }
  }
  return { subScribe, publish}
})()

const numbers = [{
    type: '01',
    fn: function(){
      console.log('01' + '已经好了')
    }},{
    type: '02',
    fn: function(){
      console.log('02' + '已经好了')
    }},{
    type: '01',
    fn: function(){
      console.log('01' + '已经好了')
    }},
]

for (let n of numbers) {
  Model.subScribe(n.type, n.fn)
}
Model.publish('01')