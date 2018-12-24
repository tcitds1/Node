var fs = require('fs')
var word_dic = {}
var tasks = []
var completedTasks = 0
var filedir = './text'

function checkIfComplete() {
  completedTasks ++
  if (completedTasks === tasks.length) {
    for (var index in word_dic) {
      console.log(index + ' :  ' + word_dic[index])
    }
  }
}

function countWords(text) {
  var words = text.toString().toLowerCase().split(/\W+/)
  for (var index in words) {
    var word = words[index]
    if (word) {
      word_dic[word] = (word_dic[word]) ? word_dic[word] + 1 : 1
    }
  }
}

fs.readdir(filedir, function (err, files) {
  if (err) throw err
  for(var index in files) {
    var task = (function(file) {
      return function() {
        fs.readFile(file, function(err, text) {
          if (err) throw err;
          countWords(text);
          checkIfComplete();
        });
      }
    })(filedir + '/' + files[index]);
    tasks.push(task);
  }
  for (var index in tasks) {
    tasks[index]()
  }
})
