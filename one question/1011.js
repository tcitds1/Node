// function Foo() {
//   Foo.a = function() {
//     console.log(1)
//   }
//   this.a = function() {
//     console.log(2)
//   }
// }
// Foo.prototype.a = function() {
//   console.log(3)
// }
// Foo.a = function() {
//   console.log(4)
// }
// Foo.a();
// let obj = new Foo();
// obj.a();
// Foo.a();
// 4
// 2
// 1

// var name = 'Tom';
// (function() {
//   if (typeof name == 'undefined') {
//     var name = 'Jack';
//     console.log('Goodbye ' + name);
//   } else {
//     console.log('Hello ' + name);
//   }
// })();

//
// var name = 'Tom';
// (function() {
//   if (typeof name == 'undefined') {
//     name = 'Jack';
//     console.log('Goodbye ' + name);
//   } else {
//     console.log('Hello ' + name);
//   }
// })();


async function async1() {
  console.log('async1 start'); // 2
  await async2();
  console.log('async1 end'); // 4
}
async function async2() {
  console.log('async2'); // 3
}
console.log('script start'); // 1
setTimeout(function() {
  console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
  console.log('promise1'); // 5
  resolve();
}).then(function() {
  console.log('promise2');
});
console.log('script end'); // 6