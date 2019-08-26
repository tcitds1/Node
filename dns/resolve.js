/* *
 * @fileOverview: ***
 * @date: 2019/00/00
 * @author: wenxiang_yi
 * @version: 1.0
 */
var dns = require('dns');
// 当一个域名对应多个ip地址时，会逐一解析出来
var options = {all: true};

// 受hosts影响
dns.lookup('www.qq.com', options, function(err, address, family){
  if(err) throw err;
  console.log('lookup: ' + address);
});

// 第二种方法 不受hosts影响
dns.resolve4('www.qq.com', function (err, address, family) {
  if(err) throw err;
  console.log('lookup: ' + address);
})