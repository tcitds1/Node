// append(element):向链表尾部添加一个新的元素；
// insert(position,element):向链表特定位置插入元素；
// remove(element):从链表移除一项；
// indexOf(element):返回链表中某元素的索引，如果没有返回-1；
// removeAt(position):从特定位置移除一项；
// isEmpty():判断链表是否为空，如果为空返回true,否则返回false;
// size():返回链表包含的元素个数；
// toString():重写继承自Object类的toString()方法，因为我们使用了Node类；
function Node(e) {
  this.element = e
  this.next = null
}

// 根据数组生成 链表
function generateList(arr) {
  let a = arr.shift()
  let head = null
  if (a) {
    head = new Node(a)
  }
  let cNode = head
  for (let item of arr) {
    cNode.next = new Node(item)
    cNode = cNode.next
  }
  return head
}

// 遍历
function readList(list) {
  let arr = []
  let cNode = list
  arr.push(list.element)
  while(cNode.next) {
    arr.push(cNode.next.element)
    cNode = cNode.next
  }
  console.log(arr.join('->'))
}

// 末尾添加
function append(list, e) {
  let node =new Node(e)
  let cNode = list
  if (list) {
    while (cNode.next) {
      cNode = cNode.next
    }
    cNode.next = node
  } else {
    list = node
  }
  return list
}

// 双向链表


function DoublyLinkedList() {
  let Node = function(element){
    this.element = element;
    this.next = null;
    this.prev = null; //NEW
  };
  let length = 0;
  let head = null;
  let tail = null; //NEW
  this.append = function(element){
    let node = new Node(element),
      current;
    if (head === null){
      head = node;
      tail = node; //NEW
    } else {
      //NEW
      tail.next = node;
      node.prev = tail;
      tail = node;
    }
    length++;
  };
  this.insert = function(position, element){
    if (position >= 0 && position <= length){
      let node = new Node(element),
        current = head,
        previous,
        index = 0;
      if (position === 0){
        if (!head){       //NEW
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node; //NEW
          head = node;
        }
      } else  if (position === length) { ////NEW
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position){
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        current.prev = node; //NEW
        node.prev = previous; //NEW
      }
      length++;
      return true;
    } else {
      return false;
    }
  };
  this.removeAt = function(position){
    if (position > -1 && position < length){
      let current = head,
        previous,
        index = 0;
      if (position === 0){ //NEW
        if (length === 1){ //
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length-1){  //NEW
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position){
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous; //NEW
      }
      length--;
      return current.element;
    } else {
      return null;
    }
  };
  this.remove = function(element){
    let index = this.indexOf(element);
    return this.removeAt(index);
  };
  this.indexOf = function(element){
    let current = head,
      index = -1;
    if (element == current.element){
      return 0;
    }
    index++;
    while(current.next){
      if (element == current.element){
        return index;
      }
      current = current.next;
      index++;
    }
    //check last item
    if (element == current.element){
      return index;
    }
    return -1;
  };
  this.isEmpty = function() {
    return length === 0;
  };
  this. size = function() {
    return length;
  };
  this.toString = function(){
    let current = head,
      s = current ? current.element : '';
    while(current && current.next){
      current = current.next;
      s += ', ' + current.element;
    }
    return s;
  };
  this.inverseToString = function() {
    let current = tail,
      s = current ? current.element : '';
    while(current && current.prev){
      current = current.prev;
      s += ', ' + current.element;
    }
    return s;
  };
  this.print = function(){
    console.log(this.toString());
  };
  this.printInverse = function(){
    console.log(this.inverseToString());
  };
  this.getHead = function(){
    return head;
  };
  this.getTail = function(){
    return tail;
  }
}

let list = generateList([1,2,3,4,5,6,7,8,9])
append(list, 20)
readList(list)