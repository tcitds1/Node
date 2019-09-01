const crypto = require('crypto')
let hash =  crypto.createHash('sha256')
let content = '12345'
hash.update(content)
let output = hash.digest('hex')
console.log(output)