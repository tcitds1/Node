/* *
 * @fileOverview: ***
 * @date: 2019/00/00
 * @author: wenxiang_yi
 * @version: 1.0
 */
// class Human {
//   constructor (name) {
//     this.name = name
//   }
//   sayName () {
//     console.log(this.name)
//   }
// }
// class Person extends Human {
//   constructor(props) {
//     super(props);
//   }
// }
//

function wait() {
  return new Promise(resolve =>
    setTimeout(resolve, 2 * 1000)
  )
}

async function main() {
  console.time();
  const x = wait();
  const y = wait();
  const z = wait();
  await x;
  await y;
  await z;
  console.timeEnd();
}
main();
