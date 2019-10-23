class Element {
  constructor (el, attr, child) {
    this.el = el
    this.attr = attr
    this.child = child
  }
  render () {
    let virtualDom = document.createElement(this.el)
    for (let key in this.attr) {
      virtualDom.setAttribute(key, this.attr[key])
    }
    this.child.forEach(item => {
      let childItem = item instanceof Element ? item.render() : document.createTextNode(item)
      virtualDom.appendChild(childItem)
    })
    return virtualDom
  }
}

let node = new Element('div', { class: 'yahello' }, ['yahaha']).render()
document.getElementsByTagName('body')[0].appendChild(node)