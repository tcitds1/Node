function Promise1(executor) {
  let self = this;
  self.value = undefined;
  self.reason = undefined;
  self.status = 'pending';

  self.onFulFilledCallbacks = [];
  self.onRejectedCallbacks = [];

  function resolve(value) {
    if (self.status === 'pending') {
      self.value = value;
      self.status = 'resolved'

      self.onFulFilledCallbacks.forEach(onFulFilled => {
        onFulFilled()
      });
    }
  }
  function reject(reason) {
    if (self.status === 'pending') {
      self.reason = reason;
      self.status = 'rejected';
      self.onRejectedCallbacks.forEach(onRejected => {
        onRejected()
      });
    }
  }

  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error)
  }
}

Promise1.prototype.then = function (onFulFilled, onRejected) {
  if (this.status === 'pending') {
    this.onFulFilledCallbacks.push(() => {
      onFulFilled(this.value)
    });
    this.onRejectedCallbacks.push(() => {
      onRejected(this.reason)
    })
  } else if (this.status === 'resolved') {
    onFulFilled(this.value);
  } else if (this.status === 'rejected') {
    onRejected(this.reason);
  }
}
let c = new Promise1((resolve, reject) => {
  console.log(1)
  setTimeout(() => {
    resolve(33)
  }, 3000)
})
c.then(result => {
  console.log(result)
})
