const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('./test.log')
});

rl.on('line', (line) => {
  const arr = line.split(' ');
  console.log(`time: ${arr[0]}, address: ${arr[1]}, event: ${arr[2]}`)
});