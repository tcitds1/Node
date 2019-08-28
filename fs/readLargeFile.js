/* *
 * @fileOverview: ***
 * @date: 2019/00/00
 * @author: wenxiang_yi
 * @version: 1.0
 */
const fs = require('fs')
const path = require('path')
// let fileStream = fs.createReadStream(__dirname + '/fs.md')
// fileStream
//   .on('data', (data) => {
//     console.log(data.toString())
//   })
//   .on('error', (err) => {
//     console.log(err)
//   })
//   .on('end', () => {
//     console.log('读取完毕')
//   })
//   .on('close', () => {
//     console.log('关闭文件流')
//   })

// 写入文件
// let inStream = fs.createReadStream()

var getFilesInDir = function(dir){

  var results = [ path.resolve(dir) ];
  var files = fs.readdirSync(dir, 'utf8');

  files.forEach(function(file){

    file = path.resolve(dir, file);

    var stats = fs.statSync(file);

    if(stats.isFile()){
      results.push(file);
    }else if(stats.isDirectory()){
      results = results.concat( getFilesInDir(file) );
    }
  });

  return results;
};

var files = getFilesInDir('../');
console.log(files);

console.log(fs.readdirSync(__dirname))