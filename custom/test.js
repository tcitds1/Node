let crypto = require('crypto')
const secret = 'abcde'
let hash = crypto.createHmac('sha256', secret).update('i love node js').digest('hex')
console.log(hash)

// const decipher = crypto.createDecipher('sha256', 'abcde');
// let decrypted = decipher.update(hash, 'hex', 'utf8');
// decrypted += decipher.final('utf8');
// console.log(decrypted);

const decipher = crypto.createDecipher('sha256', 'abcde');

// const encrypted =
//   'ca981be48e90867604588e75d04feabb63cc007a8f8ad89b10616ed84d815504';
let decrypted = decipher.update(hash, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
// Prints: some clear text data